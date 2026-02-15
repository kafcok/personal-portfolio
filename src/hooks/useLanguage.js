import { useEffect, useState } from "react";

const detectLanguage = () => {
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
