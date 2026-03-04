import styled from "styled-components";
import Box from "./Box";
import { useContext } from "react";
import { MainContext } from "./Contexts";

const SSiteInfo = styled.div`
  padding: 26px 10px 10px 10px;
  color: var(--color-foreground);
  position: relative;

  max-width: 1100px;
  max-height: calc(100vh - 100px);

  display: flex;
  flex-direction: column;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    margin-bottom: 10px;
  }

  strong {
    color: var(--color-accent);
  }

  .content {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    min-height: 0;
  }

  .close-btn {
    position: absolute;
    top: -10px;
    right: -20px;
    width: 26px;
    height: 26px;
    cursor: pointer;

    &:before,
    &:after {
      content: "";
      position: absolute;
      background-color: var(--color-foreground);
      width: 100%;
      height: 18%;
      border-radius: 10px;
      top: 50%;
      left: 50%;
      transform-origin: center;
    }

    &:before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &:after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
`;

export default function SiteInfo({ onCloseHandler }) {
  const { lang } = useContext(MainContext);
  return (
    <Box>
      <SSiteInfo>
        <button className="close-btn" onClick={onCloseHandler} />
        <div className="content">
          {lang === "pl" ? (
            <>
              <h4>Portfolio / CV — Single Page Application</h4>
              <p>
                Strona osobista w formie interaktywnego portfolio i CV,
                zbudowana jako <strong>Single Page Application</strong> w
                oparciu o React z boilerplate <strong>Vite</strong>,
                zapewniającym szybki development i zoptymalizowany build
                produkcyjny. Aplikacja hostowana jest na platformie{" "}
                <strong>Vercel</strong>, co gwarantuje błyskawiczne czasy
                ładowania, automatyczny deployment przy każdym pushu na główną
                gałąź oraz globalną dystrybucję przez CDN.
              </p>
              <p>
                Dane (projekty, doświadczenie, umiejętności) pobierane są
                dynamicznie z bazy <strong>Supabase</strong> przy użyciu{" "}
                <strong>React Query</strong>, co gwarantuje efektywne
                cachowanie, synchronizację stanu serwera oraz odświeżanie danych
                bez przeładowania strony.
              </p>
              <p>
                Strona obsługuje wielojęzyczność - treści przechowywane są w
                Supabase i serwowane per język, natomiast tłumaczenia elementów
                interfejsu użytkownika obsługuje biblioteka{" "}
                <strong>i18next</strong>, zapewniając płynne przełączanie wersji
                językowych po stronie klienta.
              </p>
              <p>
                Warstwa wizualna opiera się na <strong>Tailwind CSS v5</strong>{" "}
                jako fundamencie systemu użytkowych klas, uzupełnionym o
                komponentowe style pisane w <strong>Sass</strong>{" "}
                z&nbsp;wykorzystaniem <strong>styled-components</strong> - co
                daje pełną kontrolę nad izolacją stylów i spójność design
                systemu.
              </p>
              <p>
                Dodatkową funkcjonalnością jest możliwość pobrania CV w formie
                pliku <strong>PDF</strong> - dokument generowany jest po stronie
                serwera przy użyciu <strong>Puppeteer</strong>, co zapewnia
                pełną kontrolę nad wyglądem i formatowaniem eksportowanego
                pliku.
              </p>
              <p>
                <a
                  href="https://github.com/kafcok/personal-portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  🔗 Repozytorium:{" "}
                  <strong>github.com/kafcok/personal-portfolio</strong>
                </a>
              </p>
            </>
          ) : (
            <>
              <h4>Portfolio / CV — Single Page Application</h4>
              <p>
                A personal website in the form of an interactive portfolio and
                CV, built as a <strong>Single Page Application</strong> powered
                by React with a <strong>Vite</strong> boilerplate, providing
                fast development experience and an optimized production build.
                The application is hosted on <strong>Vercel</strong>, ensuring
                lightning-fast load times, automatic deployment on every push to
                the main branch, and global distribution via CDN.
              </p>
              <p>
                Data (projects, experience, skills) is fetched dynamically from
                a <strong>Supabase</strong> database using{" "}
                <strong>React Query</strong>, guaranteeing efficient caching,
                server state synchronization, and data updates without page
                reloads.
              </p>
              <p>
                The site supports multilingualism — content is stored in
                Supabase and served per language, while UI translations are
                handled by the <strong>i18next</strong> library, enabling smooth
                client-side language switching.
              </p>
              <p>
                The visual layer is built on <strong>Tailwind CSS v5</strong> as
                the foundation of the utility class system, complemented by
                component-level styles written in <strong>Sass</strong>{" "}
                using&nbsp;<strong>styled-components</strong> — providing full
                control over style isolation and design system consistency.
              </p>
              <p>
                An additional feature is the ability to download the CV as a{" "}
                <strong>PDF</strong> file - the document is generated
                server-side using <strong>Puppeteer</strong>, ensuring full
                control over the appearance and formatting of the exported file.
              </p>
              <p>
                <a
                  href="https://github.com/kafcok/personal-portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  🔗 Repository:{" "}
                  <strong>github.com/kafcok/personal-portfolio</strong>
                </a>
              </p>
            </>
          )}
        </div>
      </SSiteInfo>
    </Box>
  );
}
