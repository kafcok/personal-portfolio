import { useTranslation } from "react-i18next";
import { useTheme } from "./hooks/useTheme";
import { IconCrescentMoon, IconSun } from "./icons/Icons";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { t } = useTranslation();

  return (
    <button
      onClick={toggle}
      className="px-4 py-2 rounded-xl transition bg-foreground text-primary cursor-pointer"
    >
      {theme === "dark" ? (
        <>
          <IconCrescentMoon /> {t("dark")}
        </>
      ) : (
        <>
          <IconSun /> {t("light")}
        </>
      )}
    </button>
  );
}
