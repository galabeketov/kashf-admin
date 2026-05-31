"use client";

import { useEffect, useMemo, useState } from "react";
import { FaStar } from "react-icons/fa";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import AdminLayout from "@/components/layout/AdminLayout";
import { db } from "@/lib/firebase";

const getSeconds = (value) =>
  typeof value?.seconds === "number" ? value.seconds : 0;

const formatDate = (value) => {
  const sec = getSeconds(value);
  if (!sec) return "-";
  return new Date(sec * 1000).toLocaleDateString();
};

const truncate = (value, max = 90) => {
  if (!value) return "-";
  return value.length > max ? `${value.slice(0, max)}...` : value;
};

export default function ReviewsPage() {
  const [tab, setTab] = useState("pending");
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadReviews = async () => {
    setLoading(true);
    try {
      const snapshot = await getDocs(collection(db, "reviews"));
      const items = snapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));
      items.sort((a, b) => getSeconds(b.createdAt) - getSeconds(a.createdAt));
      setReviews(items);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReviews();
  }, []);

  const pendingCount = useMemo(
    () => reviews.filter((item) => item.status === "pending").length,
    [reviews],
  );

  const filtered = useMemo(
    () => reviews.filter((item) => item.status === tab),
    [reviews, tab],
  );

  const changeStatus = async (id, status) => {
    await updateDoc(doc(db, "reviews", id), { status });
    setReviews((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item)),
    );
  };

  const removeReview = async (id) => {
    await deleteDoc(doc(db, "reviews", id));
    setReviews((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <AdminLayout>
      <div className="d-flex items-center justify-between mb-20">
        <h1 style={{ color: "#f1f5f9", fontSize: "30px", fontWeight: 700 }}>
          Reviews
        </h1>
      </div>

      <div className="d-flex x-gap-10 y-gap-10 flex-wrap mb-20">
        <button
          onClick={() => setTab("pending")}
          style={{
            background:
              tab === "pending" ? "#3b82f6" : "rgba(255,255,255,0.06)",
            color: tab === "pending" ? "#fff" : "#94a3b8",
            border: "none",
            borderRadius: "999px",
            padding: "9px 18px",
          }}
        >
          Pending ({pendingCount})
        </button>
        <button
          onClick={() => setTab("approved")}
          style={{
            background:
              tab === "approved" ? "#3b82f6" : "rgba(255,255,255,0.06)",
            color: tab === "approved" ? "#fff" : "#94a3b8",
            border: "none",
            borderRadius: "999px",
            padding: "9px 18px",
          }}
        >
          Approved
        </button>
      </div>

      <div
        style={{
          background: "#1a2235",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
          overflowX: "auto",
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
        {loading ? (
          <div style={{ padding: "24px", color: "#94a3b8" }}>
            Loading reviews...
          </div>
        ) : filtered.length === 0 ? (
          <div style={{ padding: "24px", color: "#94a3b8" }}>
            No reviews in this tab.
          </div>
        ) : (
          <table
            style={{
              width: "100%",
              minWidth: "1080px",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  color: "#94a3b8",
                }}
              >
                {[
                  "Name",
                  "Country",
                  "Rating",
                  "Type",
                  "Tour Name",
                  "Review",
                  "Date",
                  "Actions",
                ].map((head) => (
                  <th
                    key={head}
                    style={{
                      textAlign: "left",
                      padding: "12px 16px",
                      fontWeight: 500,
                    }}
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr
                  key={item.id}
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    color: "#f1f5f9",
                  }}
                >
                  <td style={{ padding: "12px 16px" }}>{item.name || "-"}</td>
                  <td style={{ padding: "12px 16px" }}>
                    {item.country || "-"}
                  </td>
                  <td style={{ padding: "12px 16px" }}>
                    <div
                      className="d-flex items-center x-gap-6"
                      style={{ color: "#C9A84C" }}
                    >
                      <FaStar size={14} />
                      <span style={{ color: "#f1f5f9" }}>
                        {item.rating || 0}
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: "12px 16px" }}>{item.type || "-"}</td>
                  <td style={{ padding: "12px 16px" }}>
                    {item.tourTitle || "-"}
                  </td>
                  <td style={{ padding: "12px 16px" }}>
                    {truncate(item.text)}
                  </td>
                  <td style={{ padding: "12px 16px" }}>
                    {formatDate(item.createdAt)}
                  </td>
                  <td style={{ padding: "12px 16px" }}>
                    <div className="d-flex x-gap-8">
                      {item.status === "pending" ? (
                        <button
                          onClick={() => changeStatus(item.id, "approved")}
                          style={{
                            background: "rgba(16,185,129,0.15)",
                            border: "1px solid rgba(16,185,129,0.35)",
                            color: "#10b981",
                            borderRadius: "8px",
                            padding: "6px 10px",
                          }}
                        >
                          Approve
                        </button>
                      ) : (
                        <button
                          onClick={() => changeStatus(item.id, "pending")}
                          style={{
                            background: "rgba(245,158,11,0.15)",
                            border: "1px solid rgba(245,158,11,0.35)",
                            color: "#f59e0b",
                            borderRadius: "8px",
                            padding: "6px 10px",
                          }}
                        >
                          Reject
                        </button>
                      )}
                      <button
                        onClick={() => removeReview(item.id)}
                        style={{
                          background: "rgba(239,68,68,0.15)",
                          border: "1px solid rgba(239,68,68,0.35)",
                          color: "#ef4444",
                          borderRadius: "8px",
                          padding: "6px 10px",
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AdminLayout>
  );
}
