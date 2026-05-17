export function formatMonthYear(dateString, lang = "en") {
  if (!dateString) return "";

  const date = new Date(dateString);

  return new Intl.DateTimeFormat(lang, {
    month: "long",
    year: "numeric",
  }).format(date);
}
