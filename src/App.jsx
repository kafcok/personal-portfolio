import { useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
// import {
//   AccessAlarm,
//   IntegrationInstructionsTwoTone,
//   ThreeDRotation,
// } from "@mui/icons-material";

function App() {
  useEffect(function () {
    document.getElementById;
  }, []);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground transition-colors">
        <ThemeToggle />
        <div className="p-10 rounded-2xl shadow-xl">
          <h1 className="text-4xl font-bold text-indigo-400">
            Vite + React + SCSS + Tailwind v4 🚀
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
