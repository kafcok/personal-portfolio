import "tailwindcss";

// import { useEffect, useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  // useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { createClient } from "@supabase/supabase-js";

import { useI18nSync } from "./hooks/useI18nSync";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import Bio from "./Bio";

// const supabase = createClient(
//   import.meta.env.VITE_SUPABASE_URL,
//   import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
// );

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360 * 1000,
    },
  },
});

function App() {
  // useEffect(function () {
  //   document.getElementById;
  // }, []);

  // useEffect(() => {
  //   handleBio();
  // }, []);

  useI18nSync();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="relative min-h-screen bg-background text-foreground transition-colors">
        <div className="absolute top-5 right-5">
          <ThemeToggle />
          <LanguageToggle />
        </div>
        <div className="container">
          <div className="p-10">
            <h1 className="text-4xl font-bold text-green-500">
              {/* Vite + React + SCSS + Tailwind v4 🚀 */}
            </h1>
            <Bio />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
