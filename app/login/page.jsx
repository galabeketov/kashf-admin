"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace("/dashboard");
    }
  }, [user, router]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (err) {
      setError(err?.message || "Sign in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "20px",
        background:
          "linear-gradient(135deg, #0a0f1e 0%, #0f1629 50%, #1a2235 100%)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "#1a2235",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
          padding: "48px",
          color: "#f1f5f9",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "26px" }}>
          <div
            style={{
              color: "#fff",
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "0.12em",
            }}
          >
            TRAVEL EASY
          </div>
          <div style={{ color: "#64748b", fontSize: "13px", marginTop: "4px" }}>
            Admin Panel
          </div>
          <div
            style={{
              width: "40px",
              height: "3px",
              background: "#3b82f6",
              borderRadius: "2px",
              margin: "20px auto 0",
            }}
          />
        </div>

        {error ? (
          <div
            style={{
              background: "rgba(239,68,68,0.1)",
              border: "1px solid rgba(239,68,68,0.2)",
              borderRadius: "8px",
              color: "#ef4444",
              padding: "10px 16px",
              fontSize: "13px",
              marginBottom: "16px",
            }}
          >
            {error}
          </div>
        ) : null}

        <form onSubmit={onSubmit}>
          <label
            style={{
              color: "#94a3b8",
              fontSize: "13px",
              display: "block",
              marginBottom: "6px",
            }}
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "10px",
              height: "48px",
              padding: "0 16px",
              color: "#fff",
              fontSize: "14px",
              width: "100%",
              marginBottom: "14px",
              outline: "none",
            }}
          />

          <label
            style={{
              color: "#94a3b8",
              fontSize: "13px",
              display: "block",
              marginBottom: "6px",
            }}
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "10px",
              height: "48px",
              padding: "0 16px",
              color: "#fff",
              fontSize: "14px",
              width: "100%",
              marginBottom: "18px",
              outline: "none",
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
              border: "none",
              borderRadius: "10px",
              height: "48px",
              width: "100%",
              color: "#fff",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </section>
  );
}
