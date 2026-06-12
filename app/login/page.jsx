"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";

const authMessage = (code) => {
  if (
    code === "auth/invalid-credential" ||
    code === "auth/user-not-found" ||
    code === "auth/wrong-password"
  ) {
    return "Email yoki parol noto'g'ri.";
  }
  if (code === "auth/too-many-requests") {
    return "Juda ko'p urinish qilindi. Birozdan so'ng qayta urinib ko'ring.";
  }
  if (code === "auth/network-request-failed") {
    return "Internet aloqasini tekshirib, qayta urinib ko'ring.";
  }
  return "Kirish amalga oshmadi. Ma'lumotlarni tekshiring.";
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user?.isAdmin) router.replace("/dashboard");
  }, [user, router]);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (loading) return;
    setError("");
    setLoading(true);

    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password,
      );
      const token = await credential.user.getIdTokenResult(true);
      if (token.claims.admin !== true) {
        await signOut(auth);
        setError("Bu hisobga administrator huquqi berilmagan.");
        return;
      }
      router.replace("/dashboard");
    } catch (authError) {
      setError(authMessage(authError?.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="admin-auth">
      <section className="admin-auth__card" aria-labelledby="login-title">
        <div className="admin-auth__brand">
          <img
            src="/img/brand/travel-easy-emblem.svg"
            alt=""
            width="68"
            height="68"
          />
          <h1 id="login-title">Travel Easy Uzbekistan</h1>
          <p>Administrator boshqaruv paneli</p>
        </div>

        {error ? (
          <div className="admin-auth__error" role="alert">
            {error}
          </div>
        ) : null}

        <form onSubmit={onSubmit}>
          <div className="admin-field">
            <label htmlFor="admin-email">Email</label>
            <div className="admin-field__control">
              <input
                id="admin-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
          </div>

          <div className="admin-field">
            <label htmlFor="admin-password">Parol</label>
            <div className="admin-field__control">
              <input
                id="admin-password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                aria-label={
                  showPassword ? "Parolni yashirish" : "Parolni ko'rsatish"
                }
              >
                {showPassword ? <LuEyeOff size={19} /> : <LuEye size={19} />}
              </button>
            </div>
          </div>

          <button
            className="admin-auth__submit"
            type="submit"
            disabled={loading}
          >
            {loading ? "Kirilmoqda..." : "Kirish"}
          </button>
        </form>
      </section>
    </main>
  );
}
