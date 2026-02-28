import "tailwindcss";

import { useMemo, useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  // useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { createClient } from "@supabase/supabase-js";

import { useI18nSync } from "./hooks/useI18nSync";
import { useTranslation } from "react-i18next";
// import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import Box from "./Box";
import Grid from "./Grid";
import Bio from "./sections/Bio";
import TechStack from "./sections/TechStack";
import { MainContext } from "./Contexts";
import { useLanguage } from "./hooks/useLanguage";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Strengths from "./sections/Strengths";
import Education from "./sections/Education";
import Languages from "./sections/Languages";
import Passions from "./sections/Passions";
import ModalWindow from "./ModalWindow";
import Spinner from "./Spinner";
import Disclaimer from "./Disclaimer";

const params = new URLSearchParams(window.location.search);
const isPdf = params.get("pdf") === "true";

function App() {
  const { t } = useTranslation();
  const { lang, toggle } = useLanguage();
  const [pdfLoading, setPdfLoading] = useState(false);

  async function handleGeneratePDF() {
    setPdfLoading(true);
    const res = await fetch("/api/generate-pdf", {
      method: "POST",
    });

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "maciej-kalwa-cv.pdf";
    document.body.appendChild(a);
    a.click();

    a.remove();
    window.URL.revokeObjectURL(url);
    setPdfLoading(false);
  }

  useI18nSync();

  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 3600 * 1000,
          },
        },
      }),
    [],
  );

  const onLanguageToggle = () => {
    toggle();
  };

  return (
    <MainContext.Provider value={{ onLanguageToggle, lang, isPdf }}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {pdfLoading ? (
          <ModalWindow>
            <Spinner />
          </ModalWindow>
        ) : null}
        <div
          className={
            isPdf
              ? `pdf-layout`
              : `relative text-foreground transition-colors p-5 flex flex-col min-h-screen futura-bg`
          }
        >
          <div className="top-5 right-5 flex flex-wrap basis-auto grow-0 shrink-0 justify-between items-center pb-5 gap-5">
            {isPdf ? (
              <h1 className="font-bold text-2xl">
                Maciej Kałwa. Front-end developer.
              </h1>
            ) : (
              <h1 className="font-bold text-3xl lg:text-6xl pl-5">
                Maciej Kałwa. Front&#8209;end&nbsp;developer.
              </h1>
            )}

            {isPdf ? null : (
              <div className="flex flex-wrap gap-5 items-center">
                <a
                  href="/"
                  className="underline hover:no-underline text-nowrap"
                >
                  👉{t("About this site")}👈
                </a>
                {/* <ThemeToggle /> */}
                <LanguageToggle />
                <button
                  onClick={handleGeneratePDF}
                  type="button"
                  className="cursor-pointer underline hover:no-underline text-nowrap"
                >
                  📃 {t("Get PDF")}
                </button>
              </div>
            )}
          </div>

          <Grid>
            <Box gridArea="bio">
              <Bio />
            </Box>
            <Box gridArea="tech">
              <TechStack />
            </Box>
            <Box gridArea="experience">
              <Experience />
            </Box>
            <Box gridArea="contact">
              <Contact />
            </Box>
            <Box gridArea="strengths">
              <Strengths />
            </Box>
            <Box gridArea="education">
              <Education />
            </Box>
            <Box gridArea="language">
              <Languages />
            </Box>
            <Box gridArea="passions">
              <Passions />
            </Box>
          </Grid>
          {isPdf ? <Disclaimer /> : null}
        </div>
      </QueryClientProvider>
    </MainContext.Provider>
  );
}

export default App;
