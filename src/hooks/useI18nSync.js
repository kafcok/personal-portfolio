import { useEffect } from "react";
import i18n from "i18next";

export function useI18nSync() {
  useEffect(() => {
    const html = document.documentElement;

    const params = new URLSearchParams(window.location.search);
    const langFromUrl = params.get("lang");

    if (langFromUrl && i18n.language !== langFromUrl) {
      i18n.changeLanguage(langFromUrl);
      html.lang = langFromUrl;
    }

    const observer = new MutationObserver(() => {
      const lang = html.lang || "en";
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    });

    observer.observe(html, {
      attributes: true,
      attributeFilter: ["lang"],
    });

    return () => observer.disconnect();
  }, []);
}
