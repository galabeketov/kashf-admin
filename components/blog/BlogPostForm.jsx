"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { db, storage } from "@/lib/firebase";
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const LANGS = ["en", "uz", "ru"];
const LANG_LABELS = { en: "EN", uz: "UZ", ru: "RU" };

const CATEGORY_OPTIONS = [
  { value: "travel-tips", label: "Travel Tips" },
  { value: "city-guides", label: "City Guides" },
  { value: "food", label: "Food & Cuisine" },
  { value: "culture", label: "Culture & History" },
  { value: "practical", label: "Practical Info" },
];

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

const makeTextObj = () => ({ en: "", uz: "", ru: "" });

const initialForm = {
  title: makeTextObj(),
  excerpt: makeTextObj(),
  content: makeTextObj(),
  coverImage: "",
  category: "travel-tips",
  published: false,
  featured: false,
};

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const normalizeLocalized = (value) => {
  if (typeof value === "string") {
    return { en: value, uz: "", ru: "" };
  }
  if (value && typeof value === "object") {
    return {
      en: value.en || "",
      uz: value.uz || "",
      ru: value.ru || "",
    };
  }
  return makeTextObj();
};

export default function BlogPostForm({ mode = "new", postId }) {
  const router = useRouter();
  const [activeLang, setActiveLang] = useState("en");
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(mode === "edit");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (mode !== "edit" || !postId) return;

    const loadPost = async () => {
      const snap = await getDoc(doc(db, "posts", postId));
      if (snap.exists()) {
        const data = snap.data();
        setForm({
          title: normalizeLocalized(data.title),
          excerpt: normalizeLocalized(data.excerpt),
          content: normalizeLocalized(data.content),
          coverImage: data.coverImage || "",
          category: data.category || "travel-tips",
          published: !!data.published,
          featured: !!data.featured,
        });
      }
      setLoading(false);
    };

    loadPost();
  }, [mode, postId]);

  const selectedCategory = useMemo(
    () => CATEGORY_OPTIONS.find((item) => item.value === form.category),
    [form.category],
  );

  const setLocalized = (field, lang, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        [lang]: value,
      },
    }));
  };

  const uploadCover = async (file) => {
    if (!file) return;
    setUploading(true);

    try {
      const fileRef = ref(storage, `blog/${Date.now()}_${file.name}`);
      await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);
      setForm((prev) => ({ ...prev, coverImage: url }));
    } finally {
      setUploading(false);
    }
  };

  const savePost = async (publishedState) => {
    const sourceTitle = (form.title.en || "").trim();
    const generatedId = slugify(sourceTitle);

    if (!generatedId) {
      window.alert("English title is required to generate slug.");
      return;
    }

    setSaving(true);

    try {
      if (mode === "edit" && postId) {
        await updateDoc(doc(db, "posts", postId), {
          ...form,
          published: publishedState,
        });
      } else {
        await setDoc(doc(db, "posts", generatedId), {
          ...form,
          published: publishedState,
          createdAt: serverTimestamp(),
        });
      }

      router.push("/dashboard/blog");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
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
    );
  }

  return (
    <>
      <div className="d-flex justify-between items-center mb-30">
        <h1 style={{ color: "#f1f5f9", fontSize: "30px", fontWeight: 700 }}>
          {mode === "edit" ? "Edit Blog Post" : "New Blog Post"}
        </h1>

        <div className="d-flex items-center x-gap-10">
          {mode === "edit" ? (
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
                checked={form.published}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    published: event.target.checked,
                  }))
                }
              />
              Published
            </label>
          ) : null}

          <button
            onClick={() => savePost(false)}
            disabled={saving}
            style={{
              background: "rgba(255,255,255,0.08)",
              color: "#f1f5f9",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "10px",
              padding: "10px 16px",
            }}
          >
            {saving ? "Saving..." : "Save Draft"}
          </button>

          <button
            onClick={() => savePost(true)}
            disabled={saving}
            style={{
              background: "#3b82f6",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              padding: "10px 16px",
            }}
          >
            {saving
              ? "Saving..."
              : mode === "edit"
                ? "Save Changes"
                : "Publish"}
          </button>
        </div>
      </div>

      <div className="d-flex items-center x-gap-10 mb-20">
        <div style={{ color: "#94a3b8", fontSize: "13px" }}>
          Content Language
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
              Basic Info
            </h2>

            <div className="row y-gap-16">
              <div className="col-md-8">
                <label style={labelStyle}>Category</label>
                <select
                  value={form.category}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      category: event.target.value,
                    }))
                  }
                  style={{
                    ...inputStyle,
                    appearance: "none",
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                  }}
                >
                  {CATEGORY_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div
                  style={{
                    color: "#64748b",
                    fontSize: "12px",
                    marginTop: "6px",
                  }}
                >
                  {selectedCategory?.label || ""}
                </div>
              </div>

              <div className="col-md-4 d-flex items-end">
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
                    onChange={(event) =>
                      setForm((prev) => ({
                        ...prev,
                        featured: event.target.checked,
                      }))
                    }
                  />
                  Featured Post
                </label>
              </div>

              <div className="col-12">
                <label style={labelStyle}>Cover Image</label>
                {form.coverImage ? (
                  <div className="mb-12">
                    <img
                      src={form.coverImage}
                      alt="cover"
                      style={{
                        width: "220px",
                        height: "124px",
                        borderRadius: "8px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ) : null}

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
                  {uploading
                    ? "Uploading..."
                    : form.coverImage
                      ? "Replace Cover"
                      : "Upload Cover"}
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={(event) => uploadCover(event.target.files?.[0])}
                  />
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
              Content ({LANG_LABELS[activeLang]})
            </h2>

            <div className="row y-gap-16">
              <div className="col-12">
                <label style={labelStyle}>Title</label>
                <input
                  style={inputStyle}
                  value={form.title[activeLang]}
                  onChange={(event) =>
                    setLocalized("title", activeLang, event.target.value)
                  }
                />
              </div>

              <div className="col-12">
                <label style={labelStyle}>Excerpt</label>
                <textarea
                  rows="3"
                  style={textareaStyle}
                  value={form.excerpt[activeLang]}
                  onChange={(event) =>
                    setLocalized("excerpt", activeLang, event.target.value)
                  }
                />
              </div>

              <div className="col-12">
                <label style={labelStyle}>Content</label>
                <textarea
                  rows="12"
                  style={textareaStyle}
                  value={form.content[activeLang]}
                  onChange={(event) =>
                    setLocalized("content", activeLang, event.target.value)
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
