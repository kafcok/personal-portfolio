import { useTranslation } from "react-i18next";
import { useTheme } from "./hooks/useTheme";
import * as Icon from "./Icons";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { t } = useTranslation();

  return (
    <button
      onClick={toggle}
      className="px-4 py-2 rounded-xl transition bg-foreground text-primary cursor-pointer text-nowrap min-w-max"
    >
      {theme === "dark" ? (
        <>
          <Icon.Moon /> {t("dark")}
        </>
      ) : (
        <>
          <Icon.Sun /> {t("light")}
        </>
      )}
    </button>
  );
}
