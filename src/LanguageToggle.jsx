import { useContext, useEffect, useState } from "react";
import * as Icon from "./Icons";
// import { useTranslation } from "react-i18next";
import { MainContext } from "./Contexts";

export default function LanguageToggle() {
  const { onLanguageToggle, lang } = useContext(MainContext);
  const [emote, setEmote] = useState("");

  // const { t } = useTranslation();

  useEffect(
    function () {
      setEmote(lang?.includes("pl") ? <Icon.En /> : <Icon.Pl />);
    },
    [lang, setEmote],
  );

  return (
    <button
      onClick={onLanguageToggle}
      // className="px-3 py-2 rounded-lg bg-primary text-white cursor-pointer text-nowrap min-w-max"
      className="cursor-pointer text-nowrap min-w-max"
    >
      {emote}
    </button>
  );
}
