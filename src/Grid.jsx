import { useContext } from "react";
import styled from "styled-components";
import { MainContext } from "./Contexts";

const SGrid = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
  gap: calc(var(--spacing) * 10);

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 2fr 2fr 5fr;
    grid-template-areas:
      "bio tech experience"
      "bio tech experience"
      "bio tech experience"
      "contact tech experience"
      "contact strengths education"
      ". language passions";
    /* grid-template-rows: repeat(6, minmax(0, 1fr)); */
  }

  ${({ $isPdf }) =>
    $isPdf &&
    `display: grid !important;
    grid-template-columns: 50% 50%  !important;
      grid-template-areas: none !important;
      gap: 0;
      padding: 0px;
      background: white;
      color: black;

      `}
`;

export default function Grid({ children }) {
  const { isPdf } = useContext(MainContext);

  return <SGrid $isPdf={isPdf}>{children}</SGrid>;
}
