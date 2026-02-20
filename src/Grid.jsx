import styled from "styled-components";

const SGrid = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
  gap: calc(var(--spacing) * 5);

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 2fr 2fr 4fr;
    grid-template-areas:
      "bio tech experience"
      "bio tech experience"
      "bio tech experience"
      "contact tech experience"
      "contact strengths education"
      ". language passions";
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }
`;

export default function Grid({ children }) {
  return <SGrid>{children}</SGrid>;
}
