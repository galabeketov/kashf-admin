import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import { sampleTours, realSettings } from "./seedData";

export async function seedAllTours() {
  const results = [];
  for (const tour of sampleTours) {
    try {
      await setDoc(doc(db, "tours", tour.id), {
        ...tour,
        createdAt: serverTimestamp(),
      });
      results.push({ id: tour.id, status: "success" });
    } catch (e) {
      results.push({ id: tour.id, status: "error", error: e.message });
    }
  }
  return results;
}

export async function seedSettings() {
  await setDoc(doc(db, "site", "settings"), realSettings);
  return { status: "success" };
}
