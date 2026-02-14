import { useTheme } from "./hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="px-4 py-2 rounded-xl transition bg-foreground text-primary"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
