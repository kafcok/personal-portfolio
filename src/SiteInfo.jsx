"use client";

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
              <h4>Portfolio / CV - Next.js</h4>
              <p>
                Strona osobista w formie interaktywnego portfolio i CV,
                zbudowana na <strong>Next.js App Router</strong> i hostowana na{" "}
                <strong>Vercel</strong>.
              </p>
              <p>
                Tresci sekcji sa renderowane po stronie serwera. Dane z{" "}
                <strong>Supabase</strong> pobierane sa rownolegle w komponencie
                strony, co usuwa kaskade zapytan po stronie klienta.
              </p>
              <p>
                Przelacznik jezyka zmienia parametr adresu URL, dzieki czemu
                wybrana wersja jezykowa jest renderowana ponownie na serwerze.
              </p>
              <p>
                Warstwa wizualna opiera sie na <strong>Tailwind CSS</strong>,{" "}
                <strong>Sass</strong> i <strong>styled-components</strong>.
              </p>
              <p>
                Plik <strong>PDF</strong> jest generowany po stronie serwera z
                wykorzystaniem <strong>Puppeteer</strong>.
              </p>
              <p>
                <a
                  href="https://github.com/kafcok/personal-portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository:{" "}
                  <strong>github.com/kafcok/personal-portfolio</strong>
                </a>
              </p>
            </>
          ) : (
            <>
              <h4>Portfolio / CV - Next.js</h4>
              <p>
                A personal portfolio and CV built with the{" "}
                <strong>Next.js App Router</strong> and hosted on{" "}
                <strong>Vercel</strong>.
              </p>
              <p>
                Section content is rendered on the server. Data from{" "}
                <strong>Supabase</strong> is fetched in parallel by the page,
                removing the previous client-side request waterfall.
              </p>
              <p>
                The language switcher updates the URL parameter, so the selected
                language is rendered again on the server.
              </p>
              <p>
                The visual layer uses <strong>Tailwind CSS</strong>,{" "}
                <strong>Sass</strong>, and <strong>styled-components</strong>.
              </p>
              <p>
                The <strong>PDF</strong> export is generated server-side with{" "}
                <strong>Puppeteer</strong>.
              </p>
              <p>
                <a
                  href="https://github.com/kafcok/personal-portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository:{" "}
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
