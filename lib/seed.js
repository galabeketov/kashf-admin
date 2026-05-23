import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import { sampleTours } from "./seedData";

export async function seedAllTours(onProgress) {
  const results = [];

  for (let index = 0; index < sampleTours.length; index += 1) {
    const tour = sampleTours[index];

    try {
      await setDoc(doc(db, "tours", tour.id), {
        ...tour,
        createdAt: serverTimestamp(),
      });
      results.push({ id: tour.id, status: "success" });
    } catch (error) {
      results.push({
        id: tour.id,
        status: "error",
        error: error?.message || "Unknown error",
      });
    }

    if (typeof onProgress === "function") {
      onProgress(index + 1, sampleTours.length);
    }
  }

  return results;
}
