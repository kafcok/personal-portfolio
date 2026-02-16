import { useEffect, useState } from "react";
import { useLanguage } from "./hooks/useLanguage";
import { IconFlagPoland, IconFlagUK } from "./Icons";
import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { lang, toggle } = useLanguage();
  const [emote, setEmote] = useState("");

  const { t } = useTranslation();

  useEffect(
    function () {
      setEmote(lang.includes("pl") ? <IconFlagUK /> : <IconFlagPoland />);
    },
    [lang, setEmote],
  );

  return (
    <button
      onClick={toggle}
      className="px-3 py-2 rounded-lg bg-primary text-white cursor-pointer text-nowrap min-w-max"
    >
      {t("set")} {emote}
    </button>
  );
}
