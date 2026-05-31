"use client";

import { useEffect, useMemo, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import AdminLayout from "@/components/layout/AdminLayout";
import { db } from "@/lib/firebase";

const methodColors = {
  whatsapp: "#25D366",
  telegram: "#0088CC",
  email: "#3B82F6",
  phone: "#6366F1",
  form: "#F59E0B",
};

const methodOrder = ["whatsapp", "telegram", "email", "phone", "form"];

const getSeconds = (value) =>
  typeof value?.seconds === "number" ? value.seconds : 0;

const sourceLabel = {
  tour_detail: "Tour detail",
  header: "Header",
  footer: "Footer",
  cta: "CTA",
  contact_page: "Contact page",
  service_page: "Service pages",
};

const withinFilter = (seconds, filter) => {
  if (!seconds || filter === "all") return true;
  const now = Date.now();
  const ts = seconds * 1000;
  if (filter === "week") return now - ts <= 7 * 24 * 60 * 60 * 1000;
  return now - ts <= 31 * 24 * 60 * 60 * 1000;
};

export default function AnalyticsPage() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("month");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const snapshot = await getDocs(collection(db, "contactEvents"));
        const items = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        items.sort((a, b) => getSeconds(b.createdAt) - getSeconds(a.createdAt));
        setEvents(items);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const filtered = useMemo(
    () =>
      events.filter((item) => withinFilter(getSeconds(item.createdAt), filter)),
    [events, filter],
  );

  const methodCounts = useMemo(() => {
    const counts = { whatsapp: 0, telegram: 0, email: 0, phone: 0, form: 0 };
    filtered.forEach((item) => {
      if (counts[item.method] !== undefined) counts[item.method] += 1;
    });
    return counts;
  }, [filtered]);

  const sourceCounts = useMemo(() => {
    const counts = {};
    filtered.forEach((item) => {
      const key = item.source || "unknown";
      counts[key] = (counts[key] || 0) + 1;
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [filtered]);

  const tourCounts = useMemo(() => {
    const counts = {};
    filtered.forEach((item) => {
      const key = item.tourTitle || "General";
      counts[key] = (counts[key] || 0) + 1;
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [filtered]);

  const totalContacts = filtered.length;
  const whatsappClicks = methodCounts.whatsapp || 0;
  const formSubmissions = methodCounts.form || 0;
  const mostContactedTour = tourCounts[0]?.[0] || "-";
  const maxMethodCount = Math.max(...Object.values(methodCounts), 1);

  return (
    <AdminLayout>
      <div className="d-flex items-center justify-between mb-20">
        <h1 style={{ color: "#f1f5f9", fontSize: "30px", fontWeight: 700 }}>
          Analytics
        </h1>
        <div className="d-flex x-gap-8">
          {[
            { key: "week", label: "This Week" },
            { key: "month", label: "This Month" },
            { key: "all", label: "All Time" },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setFilter(item.key)}
              style={{
                background:
                  filter === item.key ? "#3b82f6" : "rgba(255,255,255,0.06)",
                color: filter === item.key ? "#fff" : "#94a3b8",
                border: "none",
                borderRadius: "999px",
                padding: "8px 14px",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div style={{ color: "#94a3b8" }}>Loading analytics...</div>
      ) : (
        <>
          <div className="row y-gap-16 mb-20">
            {[
              { title: "Total contacts", value: totalContacts },
              { title: "WhatsApp clicks", value: whatsappClicks },
              { title: "Form submissions", value: formSubmissions },
              { title: "Most contacted tour", value: mostContactedTour },
            ].map((card) => (
              <div className="col-lg-3 col-sm-6" key={card.title}>
                <div
                  style={{
                    background: "#1a2235",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "16px",
                    padding: "20px",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "12px",
                      width: "22px",
                      height: "12px",
                      border: "2px solid rgba(201,168,76,0.7)",
                      borderBottom: "none",
                      borderTopLeftRadius: "22px",
                      borderTopRightRadius: "22px",
                    }}
                  />
                  <div style={{ color: "#94a3b8", fontSize: "13px" }}>
                    {card.title}
                  </div>
                  <div
                    style={{
                      color: "#f1f5f9",
                      fontSize: "24px",
                      fontWeight: 700,
                      marginTop: "8px",
                    }}
                  >
                    {card.value}
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
              padding: "20px",
              marginBottom: "20px",
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "10px",
                right: "12px",
                width: "22px",
                height: "12px",
                border: "2px solid rgba(201,168,76,0.7)",
                borderBottom: "none",
                borderTopLeftRadius: "22px",
                borderTopRightRadius: "22px",
              }}
            />
            <h3 style={{ color: "#f1f5f9", marginBottom: "14px" }}>
              By Method
            </h3>
            <div className="d-flex flex-column y-gap-12">
              {methodOrder.map((method) => {
                const count = methodCounts[method] || 0;
                const width = `${(count / maxMethodCount) * 100}%`;
                return (
                  <div key={method}>
                    <div
                      className="d-flex justify-between mb-6"
                      style={{ color: "#cbd5e1", fontSize: "13px" }}
                    >
                      <span style={{ textTransform: "capitalize" }}>
                        {method}
                      </span>
                      <span>{count}</span>
                    </div>
                    <div
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        borderRadius: "999px",
                        height: "10px",
                      }}
                    >
                      <div
                        style={{
                          width,
                          height: "10px",
                          borderRadius: "999px",
                          background: methodColors[method] || "#3b82f6",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="row y-gap-20">
            <div className="col-lg-6">
              <div
                style={{
                  background: "#1a2235",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "20px",
                }}
              >
                <h3 style={{ color: "#f1f5f9", marginBottom: "12px" }}>
                  By Source
                </h3>
                <table style={{ width: "100%", color: "#f1f5f9" }}>
                  <tbody>
                    {sourceCounts.map(([source, count]) => (
                      <tr key={source}>
                        <td style={{ padding: "8px 0", color: "#cbd5e1" }}>
                          {sourceLabel[source] || source}
                        </td>
                        <td style={{ padding: "8px 0", textAlign: "right" }}>
                          {count}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                style={{
                  background: "#1a2235",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "20px",
                }}
              >
                <h3 style={{ color: "#f1f5f9", marginBottom: "12px" }}>
                  By Tour
                </h3>
                <table style={{ width: "100%", color: "#f1f5f9" }}>
                  <tbody>
                    {tourCounts.slice(0, 10).map(([tourName, count]) => (
                      <tr key={tourName}>
                        <td style={{ padding: "8px 0", color: "#cbd5e1" }}>
                          {tourName}
                        </td>
                        <td style={{ padding: "8px 0", textAlign: "right" }}>
                          {count}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div
            style={{
              background: "#1a2235",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              padding: "20px",
              marginTop: "20px",
            }}
          >
            <h3 style={{ color: "#f1f5f9", marginBottom: "12px" }}>
              Recent Events
            </h3>
            <div className="d-flex flex-column y-gap-10">
              {filtered.slice(0, 20).map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-between items-center"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: "10px",
                    padding: "10px 12px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: "#f1f5f9",
                        fontSize: "14px",
                        textTransform: "capitalize",
                      }}
                    >
                      {item.method} · {sourceLabel[item.source] || item.source}
                    </div>
                    <div style={{ color: "#94a3b8", fontSize: "13px" }}>
                      {item.tourTitle || "General"}
                    </div>
                  </div>
                  <div style={{ color: "#64748b", fontSize: "12px" }}>
                    {getSeconds(item.createdAt)
                      ? new Date(
                          getSeconds(item.createdAt) * 1000,
                        ).toLocaleString()
                      : "-"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </AdminLayout>
  );
}
