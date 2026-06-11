"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

export function useAuth() {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null);
        return;
      }

      try {
        const token = await firebaseUser.getIdTokenResult();
        setUser({
          firebaseUser,
          email: firebaseUser.email,
          isAdmin: token.claims.admin === true,
        });
      } catch {
        setUser(null);
      }
    });
    return () => unsub();
  }, []);
  return user;
}
