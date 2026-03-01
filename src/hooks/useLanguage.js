import { useEffect, useState } from "react";

const detectLanguage = () => {
  const parameters = new URLSearchParams(window.location.search);
  const urlLang = parameters.get("lang");
  if (urlLang) return urlLang;

  const stored = localStorage.getItem("lang");
  if (stored) return stored;

  const sys = navigator.language.toLowerCase();
  return sys.startsWith("pl") ? "pl" : "en";
};

export function useLanguage() {
  const [lang, setLang] = useState(detectLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggle = () => {
    setLang((prev) => (prev === "pl" ? "en" : "pl"));
  };

  return { lang, setLang, toggle };
}

export function formatMonthYear(dateString) {
  if (!dateString) return "";

  const locale = detectLanguage();
  const date = new Date(dateString);

  return new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  }).format(date);
}
