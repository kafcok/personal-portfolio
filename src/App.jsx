"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import LanguageToggle from "./LanguageToggle";
import { MainContext } from "./Contexts";
import { useLanguage } from "./hooks/useLanguage";
import ModalWindow from "./ModalWindow";
import Spinner from "./Spinner";
import SiteInfo from "./SiteInfo";
import { translate } from "./lib/translations";

function App({ initialIsPdf = false, initialLang, children }) {
  const { lang, toggle } = useLanguage(initialLang);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [siteInfo, setSiteInfo] = useState(false);
  const isPdf = initialIsPdf;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    document.documentElement.classList.add("futura-bg");
  }, []);

  const navigateToLanguage = useCallback(
    (nextLang, method = "push") => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("lang", nextLang);

      if (isPdf) {
        params.set("pdf", "true");
      }

      router[method](`${pathname}?${params.toString()}`, { scroll: false });
    },
    [isPdf, pathname, router, searchParams],
  );

  useEffect(() => {
    if (!initialLang && lang !== "en") {
      navigateToLanguage(lang, "replace");
    }
  }, [initialLang, lang, navigateToLanguage]);

  async function handleGeneratePDF() {
    setPdfLoading(true);
    const res = await fetch("/api/generate-pdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lang,
      }),
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

  const onLanguageToggle = () => {
    const nextLang = lang === "pl" ? "en" : "pl";
    toggle();
    navigateToLanguage(nextLang);
  };

  const toggleSiteInfo = () => {
    setSiteInfo(!siteInfo);
  };

  return (
    <MainContext.Provider value={{ onLanguageToggle, lang, isPdf }}>
      {pdfLoading ? (
        <ModalWindow>
          <Spinner />
        </ModalWindow>
      ) : null}
      {siteInfo ? (
        <ModalWindow>
          <SiteInfo onCloseHandler={toggleSiteInfo} />
        </ModalWindow>
      ) : null}
      <div
        className={
          isPdf
            ? `pdf-layout`
            : `relative text-foreground transition-colors py-5 px-2 md:px-5 flex flex-col min-h-screen`
        }
      >
        <div className="top-5 right-5 flex flex-wrap basis-auto grow-0 shrink-0 justify-between items-center pb-5 gap-5">
          {isPdf ? (
            <h1 className="font-bold text-2xl">
              Maciej Kalwa. Front-end developer.
            </h1>
          ) : (
            <h1 className="font-bold text-3xl lg:text-6xl pl-5">
              Maciej Kalwa. Front&#8209;end&nbsp;developer.
            </h1>
          )}

          {isPdf ? null : (
            <div
              className="flex flex-wrap gap-5 items-center py-3 px-7 rounded-xl"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--color-box) 60%, transparent)",
                backdropFilter: "blur(8px)",
              }}
            >
              <button
                onClick={toggleSiteInfo}
                className="underline hover:no-underline text-nowrap cursor-pointer"
              >
                {translate(lang, "About this site")}
              </button>
              <LanguageToggle />
              {/* <button
                onClick={handleGeneratePDF}
                type="button"
                className="cursor-pointer underline hover:no-underline text-nowrap"
              >
                PDF {translate(lang, "Get PDF")}
              </button> */}

              {/* @todo - temporary static PDF */}
              <a
                href="https://zxnaadmzzwarmoamojvz.supabase.co/storage/v1/object/public/portfolio-files/cv_maciej_kalwa.pdf"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer underline hover:no-underline text-nowrap"
              >
                PDF {translate(lang, "Get PDF")}
              </a>
            </div>
          )}
        </div>

        {children}
      </div>
    </MainContext.Provider>
  );
}

export default App;
