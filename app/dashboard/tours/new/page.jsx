"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AdminLayout, { useAdminLang } from "@/components/layout/AdminLayout";
import { db, storage } from "@/lib/firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const LANGS = ["en", "uz", "ru"];
const LANG_LABELS = { en: "EN", uz: "UZ", ru: "RU" };

const makeTextObj = (value = "") => ({ en: value, uz: "", ru: "" });

const initialForm = {
  title: makeTextObj(),
  description: makeTextObj(),
  duration: "",
  price: "",
  published: false,
  featured: false,
  images: [],
  includes: { en: [""], uz: [""], ru: [""] },
  itinerary: [{ title: makeTextObj(), description: makeTextObj() }],
};

const inputStyle = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "10px",
  height: "46px",
  padding: "0 16px",
  color: "#fff",
  fontSize: "14px",
  width: "100%",
};

const textareaStyle = {
  ...inputStyle,
  height: "auto",
  padding: "12px 16px",
};

const labelStyle = {
  color: "#94a3b8",
  fontSize: "13px",
  fontWeight: 500,
  marginBottom: "6px",
  display: "block",
};

const cardStyle = {
  background: "#1a2235",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "16px",
  padding: "28px",
};

const sanitizeIncludes = (includes) =>
  LANGS.reduce((acc, lang) => {
    acc[lang] = (includes[lang] || []).map((x) => x.trim()).filter(Boolean);
    return acc;
  }, {});

const sanitizeItinerary = (itinerary) =>
  itinerary
    .map((day) => ({
      title: LANGS.reduce((acc, lang) => {
        acc[lang] = (day.title?.[lang] || "").trim();
        return acc;
      }, {}),
      description: LANGS.reduce((acc, lang) => {
        acc[lang] = (day.description?.[lang] || "").trim();
        return acc;
      }, {}),
    }))
    .filter((day) => Object.values(day.title).some(Boolean));

const makeId = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function NewTourPage() {
  const { t } = useAdminLang();
  const router = useRouter();

  const [activeLang, setActiveLang] = useState("en");
  const [form, setForm] = useState(initialForm);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const setLocalized = (field, lang, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: { ...prev[field], [lang]: value },
    }));
  };

  const updateInclude = (index, value) => {
    setForm((prev) => {
      const next = [...prev.includes[activeLang]];
      next[index] = value;
      return {
        ...prev,
        includes: {
          ...prev.includes,
          [activeLang]: next,
        },
      };
    });
  };

  const updateItinerary = (index, key, value) => {
    setForm((prev) => {
      const nextIt = [...prev.itinerary];
      nextIt[index] = {
        ...nextIt[index],
        [key]: {
          ...nextIt[index][key],
          [activeLang]: value,
        },
      };
      return { ...prev, itinerary: nextIt };
    });
  };

  const uploadImage = async (file) => {
    if (!file) return;
    setUploading(true);
    try {
      const fileRef = ref(storage, `tours/${Date.now()}_${file.name}`);
      await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);
      setForm((prev) => ({ ...prev, images: [...prev.images, url] }));
    } finally {
      setUploading(false);
    }
  };

  const saveTour = async (published) => {
    const baseTitle = form.title.en || form.title.uz || form.title.ru;
    if (!baseTitle.trim()) {
      window.alert(`${t("titleLabel")} is required`);
      return;
    }

    const id = makeId(baseTitle);
    if (!id) {
      window.alert("Title must contain letters or numbers");
      return;
    }

    setSaving(true);
    try {
      await setDoc(doc(db, "tours", id), {
        ...form,
        duration: Number(form.duration || 0),
        price: Number(form.price || 0),
        includes: sanitizeIncludes(form.includes),
        itinerary: sanitizeItinerary(form.itinerary),
        published,
        createdAt: serverTimestamp(),
      });

      router.push("/dashboard/tours");
    } finally {
      setSaving(false);
    }
  };

  return (
    <AdminLayout>
      <div className="d-flex justify-between items-center mb-30">
        <h1 style={{ color: "#f1f5f9", fontSize: "30px", fontWeight: 700 }}>
          {t("addNewTour")}
        </h1>
        <div className="d-flex x-gap-10">
          <button
            onClick={() => saveTour(false)}
            disabled={saving}
            style={{
              background: "rgba(255,255,255,0.08)",
              color: "#f1f5f9",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "10px",
              padding: "10px 16px",
            }}
          >
            {saving ? t("saving") : t("saveDraft")}
          </button>
          <button
            onClick={() => saveTour(true)}
            disabled={saving}
            style={{
              background: "#3b82f6",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              padding: "10px 16px",
            }}
          >
            {saving ? t("saving") : t("publish")}
          </button>
        </div>
      </div>

      <div className="d-flex items-center x-gap-10 mb-20">
        <div style={{ color: "#94a3b8", fontSize: "13px" }}>
          {t("contentLang")}
        </div>
        {LANGS.map((lang) => {
          const active = activeLang === lang;
          return (
            <button
              key={lang}
              onClick={() => setActiveLang(lang)}
              style={{
                background: active ? "#3b82f6" : "rgba(255,255,255,0.06)",
                color: active ? "#fff" : "#64748b",
                border: "none",
                borderRadius: "8px",
                padding: "8px 12px",
                fontSize: "12px",
              }}
            >
              {LANG_LABELS[lang]}
            </button>
          );
        })}
      </div>

      <div className="row y-gap-20">
        <div className="col-12">
          <div style={cardStyle}>
            <h2
              style={{
                color: "#f1f5f9",
                fontSize: "18px",
                marginBottom: "18px",
              }}
            >
              {t("basicInfo")}
            </h2>
            <div className="row y-gap-16">
              <div className="col-12">
                <label style={labelStyle}>
                  {t("titleLabel")} ({LANG_LABELS[activeLang]})
                </label>
                <input
                  style={inputStyle}
                  value={form.title[activeLang]}
                  onChange={(e) =>
                    setLocalized("title", activeLang, e.target.value)
                  }
                />
              </div>

              <div className="col-md-6">
                <label style={labelStyle}>{t("duration")}</label>
                <input
                  type="number"
                  style={inputStyle}
                  value={form.duration}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, duration: e.target.value }))
                  }
                />
              </div>

              <div className="col-md-6">
                <label style={labelStyle}>{t("price")}</label>
                <input
                  type="number"
                  style={inputStyle}
                  value={form.price}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, price: e.target.value }))
                  }
                />
              </div>

              <div className="col-12">
                <label style={labelStyle}>
                  {t("description")} ({LANG_LABELS[activeLang]})
                </label>
                <textarea
                  rows="4"
                  style={textareaStyle}
                  value={form.description[activeLang]}
                  onChange={(e) =>
                    setLocalized("description", activeLang, e.target.value)
                  }
                />
              </div>

              <div className="col-12">
                <label
                  style={{
                    color: "#94a3b8",
                    fontSize: "14px",
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={form.featured}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        featured: e.target.checked,
                      }))
                    }
                  />
                  {t("featured")}
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div style={cardStyle}>
            <h2
              style={{
                color: "#f1f5f9",
                fontSize: "18px",
                marginBottom: "18px",
              }}
            >
              {t("tourImages")}
            </h2>
            <div className="d-flex x-gap-10 y-gap-10 flex-wrap mb-15">
              {form.images.map((img) => (
                <div key={img} className="position-relative">
                  <img
                    src={img}
                    alt="tour"
                    style={{
                      width: "120px",
                      height: "90px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <button
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        images: prev.images.filter((item) => item !== img),
                      }))
                    }
                    style={{
                      position: "absolute",
                      top: "6px",
                      right: "6px",
                      width: "22px",
                      height: "22px",
                      border: "none",
                      borderRadius: "999px",
                      background: "rgba(239,68,68,0.95)",
                      color: "#fff",
                    }}
                  >
                    x
                  </button>
                </div>
              ))}
            </div>

            <label
              style={{
                display: "inline-block",
                background: "rgba(59,130,246,0.15)",
                color: "#3b82f6",
                borderRadius: "8px",
                padding: "8px 12px",
                cursor: "pointer",
              }}
            >
              {uploading ? t("uploading") : t("addPhoto")}
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => uploadImage(e.target.files?.[0])}
              />
            </label>
          </div>
        </div>

        <div className="col-12">
          <div style={cardStyle}>
            <div className="d-flex justify-between items-center mb-20">
              <h2 style={{ color: "#f1f5f9", fontSize: "18px", margin: 0 }}>
                {t("whatsIncluded")}
              </h2>
              <button
                onClick={() =>
                  setForm((prev) => ({
                    ...prev,
                    includes: {
                      ...prev.includes,
                      [activeLang]: [...prev.includes[activeLang], ""],
                    },
                  }))
                }
                style={{
                  background: "rgba(59,130,246,0.15)",
                  color: "#3b82f6",
                  border: "none",
                  borderRadius: "8px",
                  padding: "8px 12px",
                }}
              >
                {t("addItem")}
              </button>
            </div>

            <div className="row y-gap-12">
              {(form.includes[activeLang] || []).map((item, index) => (
                <div
                  className="col-12 d-flex items-center x-gap-10"
                  key={`${activeLang}-${index}`}
                >
                  <input
                    style={inputStyle}
                    value={item}
                    onChange={(e) => updateInclude(index, e.target.value)}
                    placeholder={t("includeItem")}
                  />
                  <button
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        includes: {
                          ...prev.includes,
                          [activeLang]: prev.includes[activeLang].filter(
                            (_, i) => i !== index,
                          ),
                        },
                      }))
                    }
                    disabled={(form.includes[activeLang] || []).length === 1}
                    style={{
                      background: "rgba(239,68,68,0.1)",
                      color: "#ef4444",
                      border: "none",
                      borderRadius: "8px",
                      padding: "8px 10px",
                    }}
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-12">
          <div style={cardStyle}>
            <div className="d-flex justify-between items-center mb-20">
              <h2 style={{ color: "#f1f5f9", fontSize: "18px", margin: 0 }}>
                {t("itinerary")}
              </h2>
              <button
                onClick={() =>
                  setForm((prev) => ({
                    ...prev,
                    itinerary: [
                      ...prev.itinerary,
                      { title: makeTextObj(), description: makeTextObj() },
                    ],
                  }))
                }
                style={{
                  background: "rgba(59,130,246,0.15)",
                  color: "#3b82f6",
                  border: "none",
                  borderRadius: "8px",
                  padding: "8px 12px",
                }}
              >
                {t("addDay")}
              </button>
            </div>

            <div className="row y-gap-20">
              {form.itinerary.map((day, index) => (
                <div
                  className="col-12"
                  key={index}
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "12px",
                    padding: "16px",
                  }}
                >
                  <div className="d-flex justify-between items-center mb-14">
                    <div
                      style={{
                        color: "#f1f5f9",
                        fontSize: "14px",
                        fontWeight: 600,
                      }}
                    >
                      {t("dayLabel")} {index + 1}
                    </div>
                    <button
                      onClick={() =>
                        setForm((prev) => ({
                          ...prev,
                          itinerary: prev.itinerary.filter(
                            (_, i) => i !== index,
                          ),
                        }))
                      }
                      disabled={form.itinerary.length === 1}
                      style={{
                        background: "rgba(239,68,68,0.1)",
                        color: "#ef4444",
                        border: "none",
                        borderRadius: "8px",
                        padding: "6px 10px",
                        fontSize: "12px",
                      }}
                    >
                      {t("removeDay")}
                    </button>
                  </div>

                  <label style={labelStyle}>
                    {t("dayTitle")} ({LANG_LABELS[activeLang]})
                  </label>
                  <input
                    style={inputStyle}
                    value={day.title[activeLang]}
                    onChange={(e) =>
                      updateItinerary(index, "title", e.target.value)
                    }
                    placeholder={t("dayTitle")}
                  />

                  <label style={{ ...labelStyle, marginTop: "12px" }}>
                    {t("dayDesc")} ({LANG_LABELS[activeLang]})
                  </label>
                  <textarea
                    rows="3"
                    style={textareaStyle}
                    value={day.description[activeLang]}
                    onChange={(e) =>
                      updateItinerary(index, "description", e.target.value)
                    }
                    placeholder={t("dayDesc")}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
