import { useContext } from "react";
import styled from "styled-components";
import { MainContext } from "./Contexts";

const SDisc = styled.p`
  font-size: 9px;
  padding: 10px 0 20px;
`;

export default function Disclaimer() {
  const { lang } = useContext(MainContext);

  return (
    <SDisc>
      {lang === "pl"
        ? "Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w CV w celu przeprowadzenia obecnego oraz przyszłych procesów rekrutacyjnych zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO)."
        : "I consent to the processing of my personal data contained in my CV for the purposes of current and future recruitment processes in accordance with Regulation (EU) 2016/679 of the European Parliament and of the Council (GDPR)."}
    </SDisc>
  );
}
