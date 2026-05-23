import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

const SETTINGS_COLLECTION = "site";
const SETTINGS_DOC = "settings";

export async function getSettings() {
  const snap = await getDoc(doc(db, SETTINGS_COLLECTION, SETTINGS_DOC));
  if (!snap.exists()) return null;
  return snap.data();
}

export async function saveSettings(data) {
  await setDoc(doc(db, SETTINGS_COLLECTION, SETTINGS_DOC), data, {
    merge: true,
  });
}
