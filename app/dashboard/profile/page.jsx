"use client";

import { useEffect, useMemo, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import AdminLayout, { useAdminLang } from "@/components/layout/AdminLayout";
import { storage } from "@/lib/firebase";
import { defaultSettings } from "@/lib/settingsData";
import { getSettings, saveSettings } from "@/lib/settings";

const LANGS = ["en", "uz", "ru"];
const TABS = [
  { key: "guide", label: "Guide Info" },
  { key: "contact", label: "Contact" },
  { key: "hero", label: "Hero Section" },
  { key: "extra", label: "Features & Testimonials" },
];

const cardStyle = {
  background: "#1a2235",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "16px",
  padding: "20px",
};

const inputStyle = {
  width: "100%",
  background: "#0f172a",
  color: "#f1f5f9",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "10px",
  padding: "10px 12px",
  fontSize: "14px",
};

const textAreaStyle = {
  ...inputStyle,
  minHeight: "90px",
  resize: "vertical",
};

const cloneDefaults = () => JSON.parse(JSON.stringify(defaultSettings));

const langLabel = (lang) => lang.toUpperCase();

export default function ProfilePage() {
  const { t } = useAdminLang();
  const [activeTab, setActiveTab] = useState("guide");
  const [formState, setFormState] = useState(cloneDefaults);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState("");
  const [uploading, setUploading] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const saved = await getSettings();
        setFormState(saved || cloneDefaults());
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 3000);
    return () => clearTimeout(timer);
  }, [toast]);

  const updateNestedLang = (group, field, lang, value) => {
    setFormState((prev) => ({
      ...prev,
      [group]: {
        ...prev[group],
        [field]: {
          ...prev[group]?.[field],
          [lang]: value,
        },
      },
    }));
  };

  const updateStat = (containerKey, index, field, lang, value) => {
    setFormState((prev) => {
      const nextItems = [...(prev[containerKey] || [])];
      const current = nextItems[index] || {
        num: "",
        label: { en: "", uz: "", ru: "" },
      };
      if (field === "num") {
        nextItems[index] = { ...current, num: value };
      } else {
        nextItems[index] = {
          ...current,
          label: {
            ...current.label,
            [lang]: value,
          },
        };
      }
      return { ...prev, [containerKey]: nextItems };
    });
  };

  const updateGuideStat = (index, field, lang, value) => {
    setFormState((prev) => {
      const nextStats = [...(prev.guide?.stats || [])];
      const current = nextStats[index] || {
        num: "",
        label: { en: "", uz: "", ru: "" },
      };
      if (field === "num") {
        nextStats[index] = { ...current, num: value };
      } else {
        nextStats[index] = {
          ...current,
          label: {
            ...current.label,
            [lang]: value,
          },
        };
      }
      return {
        ...prev,
        guide: {
          ...prev.guide,
          stats: nextStats,
        },
      };
    });
  };

  const updateFeature = (index, key, lang, value) => {
    setFormState((prev) => {
      const next = [...(prev.features || [])];
      const current = next[index] || {
        id: index + 1,
        icon: "",
        title: {},
        text: {},
      };
      if (key === "icon") {
        next[index] = { ...current, icon: value };
      } else {
        next[index] = {
          ...current,
          [key]: {
            ...current[key],
            [lang]: value,
          },
        };
      }
      return { ...prev, features: next };
    });
  };

  const updateTestimonial = (index, key, lang, value) => {
    setFormState((prev) => {
      const next = [...(prev.testimonials || [])];
      const current = next[index] || {
        id: index + 1,
        name: "",
        avatar: "",
        country: {},
        text: {},
        tour: "",
        rating: 5,
      };

      if (
        key === "name" ||
        key === "tour" ||
        key === "rating" ||
        key === "avatar"
      ) {
        next[index] = { ...current, [key]: value };
      } else {
        next[index] = {
          ...current,
          [key]: {
            ...current[key],
            [lang]: value,
          },
        };
      }

      return { ...prev, testimonials: next };
    });
  };

  const uploadImage = async (file, pathPrefix) => {
    const fileRef = ref(storage, `${pathPrefix}_${Date.now()}_${file.name}`);
    await uploadBytes(fileRef, file);
    return getDownloadURL(fileRef);
  };

  const onGuidePhotoUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setUploading("guide");
      const url = await uploadImage(file, "guide/photo");
      setFormState((prev) => ({
        ...prev,
        guide: {
          ...prev.guide,
          photo: url,
        },
      }));
    } finally {
      setUploading("");
    }
  };

  const onHeroBgUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setUploading("hero");
      const url = await uploadImage(file, "hero/bg");
      setFormState((prev) => ({
        ...prev,
        hero: {
          ...prev.hero,
          backgroundImage: url,
        },
      }));
    } finally {
      setUploading("");
    }
  };

  const onTestimonialAvatarUpload = async (index, event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setUploading(`testimonial-${index}`);
      const url = await uploadImage(file, `testimonials/avatar_${index}`);
      updateTestimonial(index, "avatar", null, url);
    } finally {
      setUploading("");
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await saveSettings(formState);
      setToast("Saved successfully");
    } catch {
      setToast("Save failed");
    } finally {
      setSaving(false);
    }
  };

  const guideStats = useMemo(() => {
    const list = [...(formState.guide?.stats || [])];
    while (list.length < 4)
      list.push({ num: "", label: { en: "", uz: "", ru: "" } });
    return list.slice(0, 4);
  }, [formState.guide?.stats]);

  const heroStats = useMemo(() => {
    const list = [...(formState.stats || [])];
    while (list.length < 3)
      list.push({ num: "", label: { en: "", uz: "", ru: "" } });
    return list.slice(0, 3);
  }, [formState.stats]);

  if (loading) {
    return (
      <AdminLayout>
        <div style={{ color: "#64748b" }}>Loading settings...</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <h1
        style={{
          color: "#f1f5f9",
          fontSize: "30px",
          fontWeight: 700,
          marginBottom: "20px",
        }}
      >
        {t("profile")}
      </h1>

      <div className="d-flex x-gap-10 y-gap-10 flex-wrap mb-20">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              background:
                activeTab === tab.key ? "#3b82f6" : "rgba(255,255,255,0.06)",
              color: activeTab === tab.key ? "#fff" : "#64748b",
              border: "none",
              borderRadius: "8px",
              padding: "8px 20px",
              fontSize: "14px",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "guide" && (
        <div style={cardStyle}>
          <h3 style={{ color: "#f1f5f9", marginBottom: "18px" }}>Guide Info</h3>

          <div className="mb-20">
            <div
              style={{
                color: "#64748b",
                marginBottom: "8px",
                fontSize: "13px",
              }}
            >
              Guide Photo
            </div>
            {formState.guide?.photo && (
              <img
                src={formState.guide.photo}
                alt="Guide"
                style={{
                  width: "180px",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              />
            )}
            <input type="file" accept="image/*" onChange={onGuidePhotoUpload} />
            {uploading === "guide" && (
              <div style={{ color: "#64748b", marginTop: "8px" }}>
                Uploading...
              </div>
            )}
          </div>

          {LANGS.map((lang) => (
            <div className="row y-gap-10 mb-12" key={`guide-name-${lang}`}>
              <div
                className="col-12"
                style={{ color: "#64748b", fontSize: "12px" }}
              >
                Name ({langLabel(lang)})
              </div>
              <div className="col-12">
                <input
                  style={inputStyle}
                  value={formState.guide?.name?.[lang] || ""}
                  onChange={(e) =>
                    updateNestedLang("guide", "name", lang, e.target.value)
                  }
                />
              </div>
            </div>
          ))}

          {LANGS.map((lang) => (
            <div className="row y-gap-10 mb-12" key={`guide-title-${lang}`}>
              <div
                className="col-12"
                style={{ color: "#64748b", fontSize: "12px" }}
              >
                Title ({langLabel(lang)})
              </div>
              <div className="col-12">
                <input
                  style={inputStyle}
                  value={formState.guide?.title?.[lang] || ""}
                  onChange={(e) =>
                    updateNestedLang("guide", "title", lang, e.target.value)
                  }
                />
              </div>
            </div>
          ))}

          {LANGS.map((lang) => (
            <div className="row y-gap-10 mb-12" key={`guide-bio1-${lang}`}>
              <div
                className="col-12"
                style={{ color: "#64748b", fontSize: "12px" }}
              >
                Bio 1 ({langLabel(lang)})
              </div>
              <div className="col-12">
                <textarea
                  style={textAreaStyle}
                  value={formState.guide?.bio1?.[lang] || ""}
                  onChange={(e) =>
                    updateNestedLang("guide", "bio1", lang, e.target.value)
                  }
                />
              </div>
            </div>
          ))}

          {LANGS.map((lang) => (
            <div className="row y-gap-10 mb-12" key={`guide-bio2-${lang}`}>
              <div
                className="col-12"
                style={{ color: "#64748b", fontSize: "12px" }}
              >
                Bio 2 ({langLabel(lang)})
              </div>
              <div className="col-12">
                <textarea
                  style={textAreaStyle}
                  value={formState.guide?.bio2?.[lang] || ""}
                  onChange={(e) =>
                    updateNestedLang("guide", "bio2", lang, e.target.value)
                  }
                />
              </div>
            </div>
          ))}

          <div
            style={{
              color: "#f1f5f9",
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            Guide Stats
          </div>
          {guideStats.map((stat, idx) => (
            <div
              key={`guide-stat-${idx}`}
              style={{ ...cardStyle, marginBottom: "10px", padding: "14px" }}
            >
              <div className="row y-gap-10">
                <div className="col-md-3">
                  <input
                    style={inputStyle}
                    placeholder="Num"
                    value={stat.num || ""}
                    onChange={(e) =>
                      updateGuideStat(idx, "num", null, e.target.value)
                    }
                  />
                </div>
                {LANGS.map((lang) => (
                  <div className="col-md-3" key={`${idx}-guide-stat-${lang}`}>
                    <input
                      style={inputStyle}
                      placeholder={`Label ${lang.toUpperCase()}`}
                      value={stat.label?.[lang] || ""}
                      onChange={(e) =>
                        updateGuideStat(idx, "label", lang, e.target.value)
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "contact" && (
        <div style={cardStyle}>
          <h3 style={{ color: "#f1f5f9", marginBottom: "18px" }}>Contact</h3>
          <div className="row y-gap-12">
            <div className="col-md-4">
              <div
                style={{
                  color: "#64748b",
                  fontSize: "12px",
                  marginBottom: "6px",
                }}
              >
                Phone
              </div>
              <input
                style={inputStyle}
                value={formState.contact?.phone || ""}
                onChange={(e) =>
                  setFormState((prev) => ({
                    ...prev,
                    contact: { ...prev.contact, phone: e.target.value },
                  }))
                }
              />
            </div>
            <div className="col-md-4">
              <div
                style={{
                  color: "#64748b",
                  fontSize: "12px",
                  marginBottom: "6px",
                }}
              >
                WhatsApp URL
              </div>
              <input
                style={inputStyle}
                value={formState.contact?.whatsapp || ""}
                onChange={(e) =>
                  setFormState((prev) => ({
                    ...prev,
                    contact: { ...prev.contact, whatsapp: e.target.value },
                  }))
                }
              />
            </div>
            <div className="col-md-4">
              <div
                style={{
                  color: "#64748b",
                  fontSize: "12px",
                  marginBottom: "6px",
                }}
              >
                Email
              </div>
              <input
                style={inputStyle}
                value={formState.contact?.email || ""}
                onChange={(e) =>
                  setFormState((prev) => ({
                    ...prev,
                    contact: { ...prev.contact, email: e.target.value },
                  }))
                }
              />
            </div>
            <div className="col-md-4">
              <div
                style={{
                  color: "#64748b",
                  fontSize: "12px",
                  marginBottom: "6px",
                }}
              >
                Telegram URL
              </div>
              <input
                style={inputStyle}
                value={formState.contact?.telegram || ""}
                onChange={(e) =>
                  setFormState((prev) => ({
                    ...prev,
                    contact: { ...prev.contact, telegram: e.target.value },
                  }))
                }
              />
            </div>
            <div className="col-md-4">
              <div
                style={{
                  color: "#64748b",
                  fontSize: "12px",
                  marginBottom: "6px",
                }}
              >
                Facebook URL
              </div>
              <input
                style={inputStyle}
                value={formState.contact?.facebook || ""}
                onChange={(e) =>
                  setFormState((prev) => ({
                    ...prev,
                    contact: { ...prev.contact, facebook: e.target.value },
                  }))
                }
              />
            </div>
            <div className="col-md-4">
              <div
                style={{
                  color: "#64748b",
                  fontSize: "12px",
                  marginBottom: "6px",
                }}
              >
                Instagram URL
              </div>
              <input
                style={inputStyle}
                value={formState.contact?.instagram || ""}
                onChange={(e) =>
                  setFormState((prev) => ({
                    ...prev,
                    contact: { ...prev.contact, instagram: e.target.value },
                  }))
                }
              />
            </div>
          </div>

          {LANGS.map((lang) => (
            <div className="row y-gap-10 mt-12" key={`contact-loc-${lang}`}>
              <div
                className="col-12"
                style={{ color: "#64748b", fontSize: "12px" }}
              >
                Location ({langLabel(lang)})
              </div>
              <div className="col-12">
                <input
                  style={inputStyle}
                  value={formState.contact?.location?.[lang] || ""}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      contact: {
                        ...prev.contact,
                        location: {
                          ...prev.contact?.location,
                          [lang]: e.target.value,
                        },
                      },
                    }))
                  }
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "hero" && (
        <div style={cardStyle}>
          <h3 style={{ color: "#f1f5f9", marginBottom: "18px" }}>
            Hero Section
          </h3>

          {LANGS.map((lang) => (
            <div className="row y-gap-10 mb-12" key={`hero-title-${lang}`}>
              <div
                className="col-12"
                style={{ color: "#64748b", fontSize: "12px" }}
              >
                Hero title ({langLabel(lang)})
              </div>
              <div className="col-12">
                <input
                  style={inputStyle}
                  value={formState.hero?.title?.[lang] || ""}
                  onChange={(e) =>
                    updateNestedLang("hero", "title", lang, e.target.value)
                  }
                />
              </div>
            </div>
          ))}

          {LANGS.map((lang) => (
            <div className="row y-gap-10 mb-12" key={`hero-subtitle-${lang}`}>
              <div
                className="col-12"
                style={{ color: "#64748b", fontSize: "12px" }}
              >
                Hero subtitle ({langLabel(lang)})
              </div>
              <div className="col-12">
                <textarea
                  style={textAreaStyle}
                  value={formState.hero?.subtitle?.[lang] || ""}
                  onChange={(e) =>
                    updateNestedLang("hero", "subtitle", lang, e.target.value)
                  }
                />
              </div>
            </div>
          ))}

          <div
            style={{ color: "#64748b", marginBottom: "8px", fontSize: "13px" }}
          >
            Background image
          </div>
          {formState.hero?.backgroundImage && (
            <img
              src={formState.hero.backgroundImage}
              alt="Hero background"
              style={{
                width: "260px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
          )}
          <input type="file" accept="image/*" onChange={onHeroBgUpload} />
          {uploading === "hero" && (
            <div style={{ color: "#64748b", marginTop: "8px" }}>
              Uploading...
            </div>
          )}

          <div
            style={{
              color: "#f1f5f9",
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            Hero Stats
          </div>
          {heroStats.map((stat, idx) => (
            <div
              key={`hero-stat-${idx}`}
              style={{ ...cardStyle, marginBottom: "10px", padding: "14px" }}
            >
              <div className="row y-gap-10">
                <div className="col-md-3">
                  <input
                    style={inputStyle}
                    placeholder="Num"
                    value={stat.num || ""}
                    onChange={(e) =>
                      updateStat("stats", idx, "num", null, e.target.value)
                    }
                  />
                </div>
                {LANGS.map((lang) => (
                  <div className="col-md-3" key={`${idx}-hero-stat-${lang}`}>
                    <input
                      style={inputStyle}
                      placeholder={`Label ${lang.toUpperCase()}`}
                      value={stat.label?.[lang] || ""}
                      onChange={(e) =>
                        updateStat("stats", idx, "label", lang, e.target.value)
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "extra" && (
        <div style={cardStyle}>
          <h3 style={{ color: "#f1f5f9", marginBottom: "18px" }}>
            Features & Testimonials
          </h3>

          <div style={{ color: "#f1f5f9", marginBottom: "8px" }}>Features</div>
          {(formState.features || []).slice(0, 3).map((feature, idx) => (
            <details
              key={`feature-${feature.id || idx}`}
              style={{ ...cardStyle, marginBottom: "10px", padding: "14px" }}
            >
              <summary style={{ color: "#f1f5f9", cursor: "pointer" }}>
                Feature {idx + 1}
              </summary>
              <div className="row y-gap-10 mt-12">
                <div className="col-12">
                  <input
                    style={inputStyle}
                    placeholder="Icon path"
                    value={feature.icon || ""}
                    onChange={(e) =>
                      updateFeature(idx, "icon", null, e.target.value)
                    }
                  />
                </div>
                {LANGS.map((lang) => (
                  <div className="col-md-6" key={`f-title-${idx}-${lang}`}>
                    <input
                      style={inputStyle}
                      placeholder={`Title ${lang.toUpperCase()}`}
                      value={feature.title?.[lang] || ""}
                      onChange={(e) =>
                        updateFeature(idx, "title", lang, e.target.value)
                      }
                    />
                  </div>
                ))}
                {LANGS.map((lang) => (
                  <div className="col-12" key={`f-text-${idx}-${lang}`}>
                    <textarea
                      style={textAreaStyle}
                      placeholder={`Text ${lang.toUpperCase()}`}
                      value={feature.text?.[lang] || ""}
                      onChange={(e) =>
                        updateFeature(idx, "text", lang, e.target.value)
                      }
                    />
                  </div>
                ))}
              </div>
            </details>
          ))}

          <div
            style={{ color: "#f1f5f9", marginBottom: "8px", marginTop: "18px" }}
          >
            Testimonials
          </div>
          {(formState.testimonials || []).slice(0, 3).map((item, idx) => (
            <details
              key={`testimonial-${item.id || idx}`}
              style={{ ...cardStyle, marginBottom: "10px", padding: "14px" }}
            >
              <summary style={{ color: "#f1f5f9", cursor: "pointer" }}>
                Testimonial {idx + 1}
              </summary>
              <div className="row y-gap-10 mt-12">
                <div className="col-md-4">
                  <input
                    style={inputStyle}
                    placeholder="Name"
                    value={item.name || ""}
                    onChange={(e) =>
                      updateTestimonial(idx, "name", null, e.target.value)
                    }
                  />
                </div>
                <div className="col-md-4">
                  <input
                    style={inputStyle}
                    placeholder="Tour name"
                    value={item.tour || ""}
                    onChange={(e) =>
                      updateTestimonial(idx, "tour", null, e.target.value)
                    }
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="number"
                    min="1"
                    max="5"
                    style={inputStyle}
                    placeholder="Rating"
                    value={item.rating || 5}
                    onChange={(e) =>
                      updateTestimonial(
                        idx,
                        "rating",
                        null,
                        Number(e.target.value) || 5,
                      )
                    }
                  />
                </div>

                <div className="col-12">
                  {item.avatar && (
                    <img
                      src={item.avatar}
                      alt={item.name || "avatar"}
                      style={{
                        width: "70px",
                        borderRadius: "50%",
                        marginBottom: "10px",
                      }}
                    />
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => onTestimonialAvatarUpload(idx, e)}
                  />
                  {uploading === `testimonial-${idx}` && (
                    <div style={{ color: "#64748b", marginTop: "8px" }}>
                      Uploading...
                    </div>
                  )}
                </div>

                {LANGS.map((lang) => (
                  <div className="col-md-4" key={`t-country-${idx}-${lang}`}>
                    <input
                      style={inputStyle}
                      placeholder={`Country ${lang.toUpperCase()}`}
                      value={item.country?.[lang] || ""}
                      onChange={(e) =>
                        updateTestimonial(idx, "country", lang, e.target.value)
                      }
                    />
                  </div>
                ))}

                {LANGS.map((lang) => (
                  <div className="col-12" key={`t-text-${idx}-${lang}`}>
                    <textarea
                      style={textAreaStyle}
                      placeholder={`Text ${lang.toUpperCase()}`}
                      value={item.text?.[lang] || ""}
                      onChange={(e) =>
                        updateTestimonial(idx, "text", lang, e.target.value)
                      }
                    />
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
      )}

      <button
        onClick={handleSave}
        disabled={saving}
        style={{
          position: "fixed",
          bottom: "32px",
          right: "32px",
          background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
          color: "white",
          border: "none",
          borderRadius: "12px",
          padding: "14px 32px",
          fontSize: "15px",
          fontWeight: 600,
          zIndex: 30,
        }}
      >
        {saving ? "Saving..." : "Save Settings"}
      </button>

      {!!toast && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "32px",
            background: "#10b981",
            color: "white",
            borderRadius: "10px",
            padding: "12px 24px",
            zIndex: 30,
          }}
        >
          {toast}
        </div>
      )}
    </AdminLayout>
  );
}
