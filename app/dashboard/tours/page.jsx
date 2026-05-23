"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import AdminLayout, { useAdminLang } from "@/components/layout/AdminLayout";
import { db } from "@/lib/firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

const getSeconds = (ts) => (typeof ts?.seconds === "number" ? ts.seconds : 0);

const getLocalized = (value, lang) => {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (typeof value === "object") {
    return value[lang] || value.en || value.uz || value.ru || "";
  }
  return "";
};

export default function ToursAdminPage() {
  const { t, lang } = useAdminLang();
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const snapshot = await getDocs(collection(db, "tours"));
        const items = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        items.sort((a, b) => getSeconds(b.createdAt) - getSeconds(a.createdAt));
        setTours(items);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  const onDelete = async (id) => {
    const confirmed = window.confirm(t("deleteConfirm"));
    if (!confirmed) return;

    await deleteDoc(doc(db, "tours", id));
    setTours((prev) => prev.filter((tour) => tour.id !== id));
  };

  const onTogglePublished = async (tour) => {
    const nextPublished = !tour.published;
    await updateDoc(doc(db, "tours", tour.id), { published: nextPublished });
    setTours((prev) =>
      prev.map((item) =>
        item.id === tour.id ? { ...item, published: nextPublished } : item,
      ),
    );
  };

  const hasTours = useMemo(() => tours.length > 0, [tours]);

  return (
    <AdminLayout>
      <div className="d-flex justify-between items-center mb-30">
        <h1 style={{ color: "#f1f5f9", fontSize: "30px", fontWeight: 700 }}>
          {t("tours")}
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

      <div
        style={{
          background: "#1a2235",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        {loading ? (
          <div
            style={{ padding: "30px", color: "#64748b", textAlign: "center" }}
          >
            Loading tours...
          </div>
        ) : !hasTours ? (
          <div style={{ padding: "40px", textAlign: "center" }}>
            <div style={{ color: "#f1f5f9", marginBottom: "16px" }}>
              {t("noTours")}
            </div>
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
              {t("addFirstTour")}
            </Link>
          </div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table
              className="col-12"
              style={{ minWidth: "820px", borderCollapse: "collapse" }}
            >
              <thead style={{ background: "rgba(255,255,255,0.03)" }}>
                <tr>
                  <th
                    style={{
                      color: "#64748b",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      padding: "13px 20px",
                      textAlign: "left",
                    }}
                  >
                    {t("tour")}
                  </th>
                  <th
                    style={{
                      color: "#64748b",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      padding: "13px 20px",
                      textAlign: "left",
                    }}
                  >
                    {t("duration")}
                  </th>
                  <th
                    style={{
                      color: "#64748b",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      padding: "13px 20px",
                      textAlign: "left",
                    }}
                  >
                    {t("price")}
                  </th>
                  <th
                    style={{
                      color: "#64748b",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      padding: "13px 20px",
                      textAlign: "left",
                    }}
                  >
                    {t("status")}
                  </th>
                  <th
                    style={{
                      color: "#64748b",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      padding: "13px 20px",
                      textAlign: "left",
                    }}
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {tours.map((tour) => {
                  const title = getLocalized(tour.title, lang) || "Untitled";
                  return (
                    <tr
                      key={tour.id}
                      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
                    >
                      <td style={{ padding: "13px 20px", color: "#f1f5f9" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <img
                            src={tour.images?.[0] || "/img/tours/1.png"}
                            alt={title}
                            style={{
                              width: "48px",
                              height: "36px",
                              objectFit: "cover",
                              borderRadius: "4px",
                            }}
                          />
                          <span>{title}</span>
                        </div>
                      </td>
                      <td style={{ padding: "13px 20px", color: "#f1f5f9" }}>
                        {typeof tour.duration === "number"
                          ? `${tour.duration} ${t("days")}`
                          : "-"}
                      </td>
                      <td style={{ padding: "13px 20px", color: "#f1f5f9" }}>
                        {typeof tour.price === "number"
                          ? `$${tour.price}`
                          : "-"}
                      </td>
                      <td style={{ padding: "13px 20px" }}>
                        <button
                          onClick={() => onTogglePublished(tour)}
                          style={{
                            background: tour.published
                              ? "rgba(16,185,129,0.15)"
                              : "rgba(100,116,139,0.15)",
                            color: tour.published ? "#10b981" : "#64748b",
                            border: "none",
                            borderRadius: "20px",
                            padding: "3px 10px",
                            fontSize: "11px",
                          }}
                        >
                          {tour.published ? t("published") : t("draft")}
                        </button>
                      </td>
                      <td style={{ padding: "13px 20px" }}>
                        <div style={{ display: "flex", gap: "8px" }}>
                          <Link
                            href={`/dashboard/tours/${tour.id}`}
                            style={{
                              background: "rgba(59,130,246,0.15)",
                              color: "#3b82f6",
                              border: "none",
                              borderRadius: "6px",
                              padding: "5px 12px",
                              fontSize: "12px",
                              textDecoration: "none",
                            }}
                          >
                            {t("edit")}
                          </Link>
                          <button
                            onClick={() => onDelete(tour.id)}
                            style={{
                              background: "rgba(239,68,68,0.1)",
                              color: "#ef4444",
                              border: "none",
                              borderRadius: "6px",
                              padding: "5px 12px",
                              fontSize: "12px",
                              cursor: "pointer",
                            }}
                          >
                            {t("delete")}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
