import "tailwindcss";

// import { useEffect, useState } from "react";
import { useEffect, useMemo, useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  // useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { createClient } from "@supabase/supabase-js";

import { useI18nSync } from "./hooks/useI18nSync";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import Bio from "./Bio";
import Box from "./Box";
import Grid from "./Grid";
import { MainContext } from "./Contexts";
import { useLanguage } from "./hooks/useLanguage";

// const supabase = createClient(
//   import.meta.env.VITE_SUPABASE_URL,
//   import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
// );

function App() {
  const { t } = useTranslation();
  const { lang, toggle } = useLanguage();
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
    <MainContext.Provider value={{ onLanguageToggle, lang }}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <div className="relative bg-background text-foreground transition-colors p-5 flex flex-col min-h-screen">
          <div className="top-5 right-5 flex flex-wrap basis-auto grow-0 shrink-0 justify-between items-center pb-5 gap-5">
            <h1 className="text-2xl lg:text-4xl pl-5">
              Maciej Kałwa. Front&#8209;end&nbsp;developer.
            </h1>
            <div className="flex flex-wrap gap-5 items-center">
              <a href="/" className="underline hover:no-underline text-nowrap">
                👉{t("About this site")}👈
              </a>
              <ThemeToggle />
              <LanguageToggle />
              <button
                type="button"
                className="cursor-pointer underline hover:no-underline text-nowrap"
              >
                📃 {t("Get PDF")}
              </button>
            </div>
          </div>

          <Grid>
            <Box gridArea="bio">
              <Bio />
            </Box>
            <Box gridArea="tech">
              <p>
                Aliquip dolore ullamco officia qui dolore nisi exercitation
                dolore exercitation ullamco consectetur. Tempor Lorem ullamco
                voluptate ex officia id. Sint eu ea cillum excepteur veniam qui
                ex ut. Velit nulla adipisicing occaecat cillum. Sit irure cillum
                deserunt non labore sit esse Lorem id. Est nulla nisi laboris
                proident. Aute duis et amet ad ut do. Est officia pariatur quis
                amet adipisicing et pariatur nulla anim occaecat. Commodo
                deserunt amet proident in dolor ea occaecat laborum proident
                culpa aliqua excepteur consectetur. Elit exercitation sint ad
                tempor incididunt. Voluptate aute elit proident est eiusmod
                mollit sint id exercitation magna tempor. Ut nostrud deserunt
                aliqua cupidatat veniam dolore. Sunt dolore incididunt velit
                laborum ea deserunt minim voluptate mollit non sint minim. Qui
                elit tempor commodo ad velit qui exercitation enim irure amet
                magna incididunt nulla. Et eiusmod labore deserunt ea anim.
                Consequat veniam ullamco duis labore fugiat laborum proident
                incididunt. Ut eiusmod dolore nulla adipisicing esse quis ex
                labore nostrud do Lorem fugiat. Ipsum eu cupidatat est labore
                voluptate. Aliqua quis amet aliqua exercitation laboris sint.
                Non mollit consequat magna adipisicing dolore enim. Magna do do
                sint consequat laborum.
              </p>
            </Box>
            <Box gridArea="experience">
              <p>
                Aliquip dolore ullamco officia qui dolore nisi exercitation
                dolore exercitation ullamco consectetur. Tempor Lorem ullamco
                voluptate ex officia id. Sint eu ea cillum excepteur veniam qui
                ex ut. Velit nulla adipisicing occaecat cillum. Sit irure cillum
                deserunt non labore sit esse Lorem id. Est nulla nisi laboris
                proident. Aute duis et amet ad ut do. Est officia pariatur quis
                amet adipisicing et pariatur nulla anim occaecat. Commodo
                deserunt amet proident in dolor ea occaecat laborum proident
                culpa aliqua excepteur consectetur. Elit exercitation sint ad
                tempor incididunt. Voluptate aute elit proident est eiusmod
                mollit sint id exercitation magna tempor. Ut nostrud deserunt
                aliqua cupidatat veniam dolore. Sunt dolore incididunt velit
                laborum ea deserunt minim voluptate mollit non sint minim. Qui
                elit tempor commodo ad velit qui exercitation enim irure amet
                magna incididunt nulla. Et eiusmod labore deserunt ea anim.
                Consequat veniam ullamco duis labore fugiat laborum proident
                incididunt. Ut eiusmod dolore nulla adipisicing esse quis ex
                labore nostrud do Lorem fugiat. Ipsum eu cupidatat est labore
                voluptate. Aliqua quis amet aliqua exercitation laboris sint.
                Non mollit consequat magna adipisicing dolore enim. Magna do do
                sint consequat laborum.
              </p>
            </Box>
            <Box gridArea="contact">
              <p>Kontakt</p>
            </Box>
            <Box gridArea="strengths">
              <p>Strengths</p>
            </Box>
            <Box gridArea="education">
              <p>
                Education. Aliquip dolore ullamco officia qui dolore nisi
                exercitation dolore exercitation ullamco consectetur.
              </p>
            </Box>
            <Box gridArea="language">
              <p>
                language. Aliquip dolore ullamco officia qui dolore nisi
                exercitation dolore exercitation ullamco consectetur.
              </p>
            </Box>
            <Box gridArea="passions">
              <p>
                passions. Aliquip dolore ullamco officia qui dolore nisi
                exercitation dolore exercitation ullamco consectetur.
              </p>
            </Box>
          </Grid>
        </div>
      </QueryClientProvider>
    </MainContext.Provider>
  );
}

export default App;
