import { useContext } from "react";
import styled from "styled-components";
import { MainContext } from "./Contexts";

const SGrid = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
  gap: calc(var(--spacing) * 5);
  width: 100%;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 2fr 5fr;
    grid-template-areas:
      "contact bio"
      "tech experience"
      "tech experience"
      "strengths experience"
      "strengths education"
      "language education"
      "language passions";

    max-width: 1150px;
  }

  ${({ $isPdf }) =>
    $isPdf
      ? `display: grid !important;
    grid-template-columns: 50% 50%  !important;
      grid-template-areas: none !important;
      gap: 15px;
      padding: 0px;
      background: white;
      color: black;`
      : `margin: 0 auto;
      max-width: 500px;`}
`;

export default function Grid({ children }) {
  const { isPdf } = useContext(MainContext);

  return <SGrid $isPdf={isPdf}>{children}</SGrid>;
}
