"use client";

import { useEffect, useState } from "react";
import { adminTranslations } from "./adminI18n";

export function useAdminLang() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("kashf-admin-lang");
    if (saved && adminTranslations[saved]) {
      setLang(saved);
    }
  }, []);

  const switchLang = (l) => {
    setLang(l);
    localStorage.setItem("kashf-admin-lang", l);
  };

  const t = (key) => adminTranslations[lang]?.[key] || key;

  return { lang, switchLang, t };
}
