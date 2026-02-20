import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: document.documentElement.lang || "en",
  fallbackLng: "en",

  resources: {
    en: {
      translation: {
        hello: "Hello",
        about: "About me",
        dark: "Dark",
        light: "Light",
        set: "Set",
        bio: "bio",
        "error loading": "error loading",
        history: "history",
        "About this site": "About this site",
        "Get PDF": "Get PDF",
        Responsibilities: "Responsibilities",
        present: "present",
      },
    },
    pl: {
      translation: {
        hello: "Cześć",
        about: "O mnie",
        dark: "Ciemny",
        light: "Jasny",
        set: "Ustaw",
        bio: "'o mnie'",
        "error loading": "błąd ładowania",
        history: "historia",
        "About this site": "Informacje o tej stronie",
        "Get PDF": "Pobierz PDF",
        Responsibilities: "Obowiązki",
        present: "obecnie",
      },
    },
  },

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
