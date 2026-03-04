import styled from "styled-components";

const SModalWindow = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  z-index: 100;

  &:before {
    content: "";
    position: absolute;
    background-color: var(--color-background);
    opacity: 0.8;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

export default function ModalWindow({ children }) {
  return <SModalWindow>{children}</SModalWindow>;
}
