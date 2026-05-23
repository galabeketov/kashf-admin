"use client";

import { useEffect, useMemo, useState } from "react";
import AdminLayout, { useAdminLang } from "@/components/layout/AdminLayout";
import { db } from "@/lib/firebase";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";

const getSeconds = (ts) => (typeof ts?.seconds === "number" ? ts.seconds : 0);

const formatDate = (ts) => {
  const sec = getSeconds(ts);
  if (!sec) return "-";
  return new Date(sec * 1000).toLocaleDateString();
};

const previewText = (text) => {
  if (!text) return "-";
  return text.length > 72 ? `${text.slice(0, 72)}...` : text;
};

const phoneToWa = (phone) => (phone || "").replace(/\D/g, "");

export default function InquiriesPage() {
  const { t } = useAdminLang();
  const [inquiries, setInquiries] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const snapshot = await getDocs(collection(db, "inquiries"));
        const items = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        items.sort((a, b) => getSeconds(b.createdAt) - getSeconds(a.createdAt));
        setInquiries(items);
      } finally {
        setLoading(false);
      }
    };

    fetchInquiries();
  }, []);

  const newCount = useMemo(
    () => inquiries.filter((item) => item.status === "new").length,
    [inquiries],
  );

  const onSelect = async (inquiry) => {
    setSelected(inquiry);

    if (inquiry.status === "new") {
      await updateDoc(doc(db, "inquiries", inquiry.id), { status: "read" });
      setInquiries((prev) =>
        prev.map((item) =>
          item.id === inquiry.id ? { ...item, status: "read" } : item,
        ),
      );
      setSelected((prev) => (prev ? { ...prev, status: "read" } : prev));
    }
  };

  return (
    <AdminLayout>
      <div className="d-flex items-center justify-between mb-30">
        <h1 style={{ color: "#f1f5f9", fontSize: "30px", fontWeight: 700 }}>
          {t("inquiries")}
        </h1>
        <div style={{ color: "#64748b", fontSize: "14px" }}>
          {newCount} {t("newInquiries")}
        </div>
      </div>

      {loading ? (
        <div
          style={{
            background: "#1a2235",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            padding: "40px",
            color: "#64748b",
            textAlign: "center",
          }}
        >
          Loading...
        </div>
      ) : (
        <div className="row y-gap-20">
          <div className={selected ? "col-lg-5" : "col-12"}>
            <div
              style={{
                background: "#1a2235",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              {inquiries.length === 0 ? (
                <div
                  style={{
                    padding: "30px",
                    color: "#64748b",
                    textAlign: "center",
                  }}
                >
                  {t("noInquiries")}
                </div>
              ) : (
                inquiries.map((item) => {
                  const active = selected?.id === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => onSelect(item)}
                      style={{
                        width: "100%",
                        border: "none",
                        borderTop: "1px solid rgba(255,255,255,0.04)",
                        background: active
                          ? "rgba(59,130,246,0.12)"
                          : "transparent",
                        padding: "14px 16px",
                        textAlign: "left",
                        color: "#f1f5f9",
                      }}
                    >
                      <div className="d-flex justify-between items-start">
                        <div>
                          <div className="d-flex items-center x-gap-8">
                            {item.status === "new" ? (
                              <span
                                style={{
                                  width: "8px",
                                  height: "8px",
                                  borderRadius: "50%",
                                  background: "#3b82f6",
                                }}
                              />
                            ) : null}
                            <span style={{ fontWeight: 600 }}>
                              {item.name || "-"}
                            </span>
                          </div>
                          <div
                            style={{
                              color: "#94a3b8",
                              fontSize: "13px",
                              marginTop: "4px",
                            }}
                          >
                            {item.tourTitle || "-"}
                          </div>
                          <div
                            style={{
                              color: "#64748b",
                              fontSize: "13px",
                              marginTop: "5px",
                            }}
                          >
                            {previewText(item.message)}
                          </div>
                        </div>
                        <div style={{ color: "#64748b", fontSize: "12px" }}>
                          {formatDate(item.createdAt)}
                        </div>
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          </div>

          {selected ? (
            <div className="col-lg-7">
              <div
                style={{
                  background: "#1a2235",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "24px",
                  position: "relative",
                }}
              >
                <button
                  onClick={() => setSelected(null)}
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "14px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "transparent",
                    color: "#94a3b8",
                    borderRadius: "8px",
                    width: "30px",
                    height: "30px",
                  }}
                >
                  x
                </button>

                <h2
                  style={{
                    color: "#f1f5f9",
                    fontSize: "22px",
                    marginBottom: "18px",
                  }}
                >
                  {t("inquiryDetails")}
                </h2>

                <div
                  className="d-flex flex-column y-gap-12"
                  style={{ color: "#f1f5f9" }}
                >
                  <div className="d-flex">
                    <div style={{ width: "130px", color: "#94a3b8" }}>
                      {t("name")}
                    </div>
                    <div>{selected.name || "-"}</div>
                  </div>
                  <div className="d-flex">
                    <div style={{ width: "130px", color: "#94a3b8" }}>
                      {t("phone")}
                    </div>
                    <a
                      href={`https://wa.me/${phoneToWa(selected.phone)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#3b82f6" }}
                    >
                      {selected.phone || "-"}
                    </a>
                  </div>
                  <div className="d-flex">
                    <div style={{ width: "130px", color: "#94a3b8" }}>
                      {t("email")}
                    </div>
                    {selected.email ? (
                      <a
                        href={`mailto:${selected.email}`}
                        style={{ color: "#3b82f6" }}
                      >
                        {selected.email}
                      </a>
                    ) : (
                      <div>-</div>
                    )}
                  </div>
                  <div className="d-flex">
                    <div style={{ width: "130px", color: "#94a3b8" }}>
                      {t("tour")}
                    </div>
                    <div>{selected.tourTitle || "-"}</div>
                  </div>
                  <div className="d-flex">
                    <div style={{ width: "130px", color: "#94a3b8" }}>
                      {t("preferredDate")}
                    </div>
                    <div>{selected.preferredDate || "-"}</div>
                  </div>
                  <div className="d-flex">
                    <div style={{ width: "130px", color: "#94a3b8" }}>
                      {t("groupSize")}
                    </div>
                    <div>{selected.groupSize || "-"}</div>
                  </div>
                  <div className="d-flex">
                    <div style={{ width: "130px", color: "#94a3b8" }}>
                      {t("received")}
                    </div>
                    <div>{formatDate(selected.createdAt)}</div>
                  </div>
                </div>

                <div style={{ marginTop: "18px" }}>
                  <div
                    style={{
                      color: "#94a3b8",
                      fontSize: "13px",
                      marginBottom: "8px",
                    }}
                  >
                    {t("message")}
                  </div>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      borderRadius: "10px",
                      padding: "12px",
                      color: "#f1f5f9",
                    }}
                  >
                    {selected.message || "-"}
                  </div>
                </div>

                <div className="d-flex x-gap-10 mt-20">
                  <a
                    href={`https://wa.me/${phoneToWa(selected.phone)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "#3b82f6",
                      color: "#fff",
                      borderRadius: "10px",
                      padding: "10px 14px",
                      textDecoration: "none",
                    }}
                  >
                    {t("whatsapp")}
                  </a>
                  {selected.email ? (
                    <a
                      href={`mailto:${selected.email}`}
                      style={{
                        background: "rgba(59,130,246,0.15)",
                        color: "#3b82f6",
                        borderRadius: "10px",
                        padding: "10px 14px",
                        textDecoration: "none",
                      }}
                    >
                      {t("email")}
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </AdminLayout>
  );
}
