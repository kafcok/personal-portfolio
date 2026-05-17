export const translations = {
  en: {
    "About this site": "About this site",
    "Get PDF": "Get PDF",
    Responsibilities: "Responsibilities",
    present: "present",
    "Personal Portfolio [LINK]": "Personal Portfolio [LINK]",
    Primary: "Primary",
    Secondary: "Secondary",
    Additional: "Additional",
  },
  pl: {
    "About this site": "Informacje o tej stronie",
    "Get PDF": "Pobierz PDF",
    Responsibilities: "Obowiazki",
    present: "obecnie",
    "Personal Portfolio [LINK]": "Portfolio zawodowe [LINK]",
    Primary: "Glowne",
    Secondary: "Drugorzedne",
    Additional: "Dodatkowe",
  },
};

export function translate(lang, key) {
  return translations[lang]?.[key] ?? translations.en[key] ?? key;
}
