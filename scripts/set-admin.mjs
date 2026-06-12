// Creates (if needed) a Firebase Auth user and grants the `admin: true`
// custom claim that the admin panel checks (see lib/auth.js + firestore.rules).
//
// Usage:
//   node scripts/set-admin.mjs <email> [password]
//
// - If the user already exists, only the admin claim is set (password ignored).
// - If the user does not exist, a password is required and the user is created.
//
// Requires scripts/serviceAccountKey.json (Firebase Console →
// Project Settings → Service accounts → Generate new private key).

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const [, , email, password] = process.argv;

if (!email) {
  console.error("Usage: node scripts/set-admin.mjs <email> [password]");
  process.exit(1);
}

const keyPath = fileURLToPath(new URL("./serviceAccountKey.json", import.meta.url));

let serviceAccount;
try {
  serviceAccount = JSON.parse(readFileSync(keyPath, "utf8"));
} catch {
  console.error(
    "\n❌ scripts/serviceAccountKey.json topilmadi.\n" +
      "Firebase Console → Project Settings → Service accounts →\n" +
      "Generate new private key → faylni shu yerga saqlang.\n",
  );
  process.exit(1);
}

initializeApp({ credential: cert(serviceAccount) });
const auth = getAuth();

let user;
try {
  user = await auth.getUserByEmail(email);
  console.log("ℹ️  User already exists:", user.uid);
} catch (error) {
  if (error.code === "auth/user-not-found") {
    if (!password) {
      console.error("❌ User not found. Yangi user uchun parol kiriting.");
      process.exit(1);
    }
    user = await auth.createUser({ email, password, emailVerified: true });
    console.log("✅ User created:", user.uid);
  } else {
    throw error;
  }
}

await auth.setCustomUserClaims(user.uid, { admin: true });

console.log(
  `\n✅ ${email} endi admin.\n` +
    "   Agar shu user allaqachon kirgan bo'lsa — chiqib qayta kiring (token yangilanadi).\n",
);

process.exit(0);
