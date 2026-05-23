"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";
import { useAdminLang } from "@/lib/useAdminLang";

export { useAdminLang } from "@/lib/useAdminLang";

const isActive = (pathname, href) => {
  if (href === "/dashboard") return pathname === "/dashboard";
  return pathname === href || pathname.startsWith(`${href}/`);
};

const themeVars = {
  "--sidebar-bg": "#0a0f1e",
  "--sidebar-border": "rgba(255,255,255,0.06)",
  "--accent": "#3b82f6",
  "--content-bg": "#0f1629",
  "--card-bg": "#1a2235",
  "--card-border": "rgba(255,255,255,0.08)",
  "--text-primary": "#f1f5f9",
  "--text-muted": "#64748b",
  "--success": "#10b981",
  "--warning": "#f59e0b",
};

export default function AdminLayout({ children }) {
  const user = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const { lang, switchLang, t } = useAdminLang();

  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (user === null) {
      router.replace("/login");
    }
  }, [user, router]);

  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) setSidebarOpen(false);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (isMobile) setSidebarOpen(false);
  }, [pathname, isMobile]);

  const navItems = useMemo(
    () => [
      { label: t("dashboard"), href: "/dashboard", icon: "icon-home" },
      { label: t("tours"), href: "/dashboard/tours", icon: "icon-map" },
      {
        label: t("addTour"),
        href: "/dashboard/tours/new",
        icon: "icon-plus",
      },
      {
        label: t("inquiries"),
        href: "/dashboard/inquiries",
        icon: "icon-mail",
      },
      {
        label: t("profile"),
        href: "/dashboard/profile",
        icon: "icon-user",
      },
    ],
    [t],
  );

  if (user === undefined) {
    return (
      <div
        style={{
          ...themeVars,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "var(--content-bg)",
          color: "var(--text-primary)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            className="spinner-border"
            role="status"
            style={{ color: "var(--accent)" }}
          />
          <div
            style={{
              marginTop: "12px",
              fontSize: "14px",
              color: "var(--text-muted)",
            }}
          >
            Loading...
          </div>
        </div>
      </div>
    );
  }

  if (user === null) return null;

  const sidebarLeft = isMobile ? (sidebarOpen ? "0" : "-280px") : "0";

  return (
    <div
      style={{
        ...themeVars,
        minHeight: "100vh",
        background: "var(--content-bg)",
      }}
    >
      {isMobile ? (
        <button
          onClick={() => setSidebarOpen(true)}
          style={{
            position: "fixed",
            top: "14px",
            left: "14px",
            zIndex: 98,
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: "8px",
            padding: "8px",
            color: "var(--text-primary)",
            lineHeight: 1,
          }}
          aria-label="Open menu"
        >
          <i className="icon-menu text-18" />
        </button>
      ) : null}

      {isMobile && sidebarOpen ? (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            zIndex: 99,
          }}
        />
      ) : null}

      <aside
        style={{
          position: "fixed",
          top: 0,
          left: sidebarLeft,
          bottom: 0,
          width: "260px",
          background: "var(--sidebar-bg)",
          borderRight: "1px solid var(--sidebar-border)",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          transition: "left 0.2s ease",
        }}
      >
        <div
          style={{
            padding: "24px 18px",
            borderBottom: "1px solid var(--sidebar-border)",
          }}
        >
          <div
            style={{
              color: "var(--text-primary)",
              fontWeight: 700,
              fontSize: "22px",
              letterSpacing: "0.1em",
            }}
          >
            KASHF
          </div>
          <div
            style={{
              color: "var(--text-muted)",
              fontSize: "11px",
              textTransform: "uppercase",
              marginTop: "5px",
              letterSpacing: "0.08em",
            }}
          >
            {t("adminPanel")}
          </div>

          <div style={{ marginTop: "16px" }}>
            <div
              style={{
                color: "var(--text-muted)",
                fontSize: "11px",
                marginBottom: "8px",
              }}
            >
              {t("language")}
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              {[
                ["en", "EN"],
                ["uz", "UZ"],
                ["ru", "RU"],
              ].map(([value, label]) => {
                const active = lang === value;
                return (
                  <button
                    key={value}
                    onClick={() => switchLang(value)}
                    style={{
                      minWidth: "36px",
                      height: "28px",
                      borderRadius: "999px",
                      border: "none",
                      fontSize: "11px",
                      fontWeight: 600,
                      background: active
                        ? "var(--accent)"
                        : "rgba(255,255,255,0.06)",
                      color: active ? "#fff" : "var(--text-muted)",
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div style={{ padding: "16px 12px", flex: 1, overflowY: "auto" }}>
          <div
            style={{
              color: "var(--text-muted)",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "10px",
              padding: "0 8px",
            }}
          >
            Navigation
          </div>

          <nav style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 16px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    borderLeft: active
                      ? "3px solid var(--accent)"
                      : "3px solid transparent",
                    background: active
                      ? "rgba(59,130,246,0.15)"
                      : "transparent",
                    color: active ? "var(--text-primary)" : "var(--text-muted)",
                    textDecoration: "none",
                  }}
                >
                  <span
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: active
                        ? "var(--accent)"
                        : "rgba(255,255,255,0.06)",
                    }}
                  >
                    <i className={`${item.icon} text-13`} />
                  </span>
                  <span
                    style={{ fontSize: "14px", fontWeight: active ? 600 : 500 }}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--sidebar-border)",
            padding: "14px 16px 16px",
          }}
        >
          <div
            style={{
              color: "var(--text-muted)",
              fontSize: "12px",
              marginBottom: "12px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {user?.email || "admin@kashf.uz"}
          </div>
          <button
            onClick={async () => {
              await signOut(auth);
              router.replace("/login");
            }}
            style={{
              width: "100%",
              background: "rgba(239,68,68,0.1)",
              color: "#ef4444",
              border: "1px solid rgba(239,68,68,0.2)",
              borderRadius: "8px",
              padding: "8px 16px",
              fontSize: "13px",
            }}
          >
            {t("signOut")}
          </button>
        </div>
      </aside>

      <main
        style={{
          marginLeft: isMobile ? "0" : "260px",
          minHeight: "100vh",
          padding: isMobile ? "72px 16px 22px" : "32px",
          background: "var(--content-bg)",
          color: "var(--text-primary)",
        }}
      >
        {children}
      </main>
    </div>
  );
}
