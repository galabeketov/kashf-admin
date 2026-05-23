"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import AdminLayout, { useAdminLang } from "@/components/layout/AdminLayout";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { seedAllTours } from "@/lib/seed";
import { saveSettings } from "@/lib/settings";
import { defaultSettings } from "@/lib/settingsData";

const getSeconds = (ts) => (typeof ts?.seconds === "number" ? ts.seconds : 0);

const formatDate = (ts) => {
  const sec = getSeconds(ts);
  if (!sec) return "-";
  return new Date(sec * 1000).toLocaleDateString();
};

export default function DashboardPage() {
  const { t } = useAdminLang();
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [seedLoading, setSeedLoading] = useState(false);
  const [seedProgress, setSeedProgress] = useState({ current: 0, total: 7 });
  const [seedResult, setSeedResult] = useState(null);
  const [settingsSeedLoading, setSettingsSeedLoading] = useState(false);
  const [settingsSeedMessage, setSettingsSeedMessage] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const [toursSnap, inquiriesSnap] = await Promise.all([
          getDocs(collection(db, "tours")),
          getDocs(collection(db, "inquiries")),
        ]);

        const tourItems = toursSnap.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        const inquiryItems = inquiriesSnap.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        inquiryItems.sort(
          (a, b) => getSeconds(b.createdAt) - getSeconds(a.createdAt),
        );

        setTours(tourItems);
        setInquiries(inquiryItems);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const statCards = useMemo(
    () => [
      {
        title: t("totalTours"),
        value: tours.length,
        icon: "icon-map",
        iconBg: "rgba(59,130,246,0.15)",
        iconColor: "#3b82f6",
      },
      {
        title: t("totalInquiries"),
        value: inquiries.length,
        icon: "icon-mail",
        iconBg: "rgba(16,185,129,0.15)",
        iconColor: "#10b981",
      },
      {
        title: t("newInquiries"),
        value: inquiries.filter((item) => item.status === "new").length,
        icon: "icon-bell",
        iconBg: "rgba(245,158,11,0.15)",
        iconColor: "#f59e0b",
      },
    ],
    [inquiries, tours, t],
  );

  const recentInquiries = useMemo(() => inquiries.slice(0, 5), [inquiries]);

  const handleSeedTours = async () => {
    setSeedLoading(true);
    setSeedResult(null);
    setSeedProgress((prev) => ({ ...prev, current: 0 }));

    try {
      const results = await seedAllTours((current, total) => {
        setSeedProgress({ current, total });
      });

      const failed = results.filter((item) => item.status === "error");
      const successCount = results.length - failed.length;

      setSeedResult({
        status: failed.length > 0 ? "error" : "success",
        successCount,
        failed,
      });

      const toursSnap = await getDocs(collection(db, "tours"));
      setTours(
        toursSnap.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        })),
      );
    } catch (error) {
      setSeedResult({
        status: "error",
        successCount: 0,
        failed: [{ id: "seed-process", error: error?.message || "Error" }],
      });
    } finally {
      setSeedLoading(false);
    }
  };

  const handleSeedSettings = async () => {
    setSettingsSeedLoading(true);
    setSettingsSeedMessage("");

    try {
      await saveSettings(defaultSettings);
      setSettingsSeedMessage(`✅ ${t("settingsSeeded")}`);
    } catch (error) {
      setSettingsSeedMessage(error?.message || "Failed to seed settings");
    } finally {
      setSettingsSeedLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="d-flex justify-between items-center mb-30">
        <h1 style={{ color: "#f1f5f9", fontSize: "30px", fontWeight: 700 }}>
          {t("dashboard")}
        </h1>
        <Link
          href="/dashboard/tours/new"
          style={{
            background: "#3b82f6",
            color: "#fff",
            borderRadius: "10px",
            padding: "10px 18px",
            fontSize: "14px",
            textDecoration: "none",
          }}
        >
          {t("addTour")}
        </Link>
      </div>

      <div className="row x-gap-20 y-gap-20 mb-30">
        {statCards.map((card) => (
          <div className="col-lg-4 col-md-6" key={card.title}>
            <div
              style={{
                background: "#1a2235",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "28px",
                height: "100%",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: card.iconBg,
                }}
              >
                <i
                  className={`${card.icon} text-20`}
                  style={{ color: card.iconColor }}
                />
              </div>

              <div
                style={{
                  fontSize: "36px",
                  fontWeight: 700,
                  color: "#fff",
                  marginTop: "18px",
                }}
              >
                {card.value}
              </div>
              <div
                style={{ fontSize: "13px", color: "#64748b", marginTop: "4px" }}
              >
                {card.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          background: "#1a2235",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "20px 24px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2
            style={{
              color: "#f1f5f9",
              margin: 0,
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            {t("recentInquiries")}
          </h2>
          <Link
            href="/dashboard/inquiries"
            style={{
              color: "#3b82f6",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            {t("viewAll")}
          </Link>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table
            className="col-12"
            style={{ minWidth: "780px", borderCollapse: "collapse" }}
          >
            <thead style={{ background: "rgba(255,255,255,0.03)" }}>
              <tr>
                {["name", "phone", "tour", "date", "status"].map((head) => (
                  <th
                    key={head}
                    style={{
                      color: "#64748b",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      textAlign: "left",
                      padding: "13px 20px",
                      fontWeight: 600,
                    }}
                  >
                    {t(head)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan="5"
                    style={{
                      color: "#64748b",
                      textAlign: "center",
                      padding: "18px",
                    }}
                  >
                    Loading...
                  </td>
                </tr>
              ) : recentInquiries.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    style={{
                      color: "#64748b",
                      textAlign: "center",
                      padding: "18px",
                    }}
                  >
                    {t("noInquiries")}
                  </td>
                </tr>
              ) : (
                recentInquiries.map((item) => (
                  <tr
                    key={item.id}
                    style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
                  >
                    <td style={{ color: "#f1f5f9", padding: "13px 20px" }}>
                      {item.name || "-"}
                    </td>
                    <td style={{ color: "#f1f5f9", padding: "13px 20px" }}>
                      {item.phone || "-"}
                    </td>
                    <td style={{ color: "#f1f5f9", padding: "13px 20px" }}>
                      {item.tourTitle || "-"}
                    </td>
                    <td style={{ color: "#f1f5f9", padding: "13px 20px" }}>
                      {formatDate(item.createdAt)}
                    </td>
                    <td style={{ padding: "13px 20px" }}>
                      <span
                        style={{
                          background:
                            item.status === "new"
                              ? "rgba(59,130,246,0.15)"
                              : "rgba(100,116,139,0.15)",
                          color: item.status === "new" ? "#3b82f6" : "#64748b",
                          borderRadius: "20px",
                          padding: "3px 10px",
                          fontSize: "11px",
                        }}
                      >
                        {item.status || "read"}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div
        style={{
          marginTop: "24px",
          background: "#1a2235",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
          padding: "28px",
        }}
      >
        <h3
          style={{
            color: "#fff",
            fontSize: "16px",
            fontWeight: 600,
            margin: 0,
          }}
        >
          {t("sampleData")}
        </h3>
        <p
          style={{
            color: "#64748b",
            fontSize: "13px",
            marginTop: "8px",
            marginBottom: "18px",
          }}
        >
          {t("seedDescription")}
        </p>

        <div className="d-flex x-gap-12 y-gap-12 flex-wrap">
          <button
            onClick={handleSeedTours}
            disabled={seedLoading}
            style={{
              background: "linear-gradient(135deg, #10b981, #059669)",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              padding: "10px 24px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: seedLoading ? "not-allowed" : "pointer",
              opacity: seedLoading ? 0.8 : 1,
            }}
          >
            {seedLoading
              ? `${t("seedingProgress")} (${seedProgress.current}/${seedProgress.total})`
              : `🌱 ${t("seedSampleTours")}`}
          </button>

          <button
            onClick={handleSeedSettings}
            disabled={settingsSeedLoading}
            style={{
              background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              padding: "10px 24px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: settingsSeedLoading ? "not-allowed" : "pointer",
              opacity: settingsSeedLoading ? 0.8 : 1,
            }}
          >
            {settingsSeedLoading
              ? `${t("seedingProgress")} (1/1)`
              : `🌱 ${t("seedSiteSettings")}`}
          </button>
        </div>

        {seedResult?.status === "success" && (
          <p style={{ color: "#10b981", marginTop: "14px", marginBottom: 0 }}>
            {`✅ ${seedResult.successCount} ${t("seedSuccess")}`}
          </p>
        )}

        {seedResult?.status === "error" && (
          <div style={{ color: "#ef4444", marginTop: "14px" }}>
            <p style={{ margin: 0, marginBottom: "6px" }}>{t("seedFailed")}</p>
            <p style={{ margin: 0 }}>
              {seedResult.failed
                .map(
                  (item) => `${item.id}${item.error ? ` (${item.error})` : ""}`,
                )
                .join(", ")}
            </p>
          </div>
        )}

        {!!settingsSeedMessage && (
          <p
            style={{
              color: settingsSeedMessage.startsWith("✅")
                ? "#10b981"
                : "#ef4444",
              marginTop: "10px",
              marginBottom: 0,
            }}
          >
            {settingsSeedMessage}
          </p>
        )}
      </div>
    </AdminLayout>
  );
}
