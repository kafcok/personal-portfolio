import { useContext } from "react";
import styled from "styled-components";
import { MainContext } from "./Contexts";

const SBox = styled.div`
  ${({ $gridArea }) => $gridArea && `grid-area: ${$gridArea};`}
  position: relative;
  z-index: 1;

  ${({ $pdfOrder, $isPdf, $pdfWidth }) =>
    $pdfOrder && $isPdf
      ? `order: ${$pdfOrder};${$pdfWidth && `grid-column-start: span ${$pdfWidth};`}`
      : ""}

  ${({ $isPdf }) =>
    !$isPdf &&
    `
  backdrop-filter: blur(10px) hue-rotate(-10deg) saturate(60%) brightness(100%);
    > .bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--color-box);
    z-index: -1;
    opacity: 0.5;
  }
  `}
`;

export default function Box({ children, gridArea, pdfOrder, pdfWidth }) {
  const { isPdf } = useContext(MainContext);
  return (
    <SBox
      className={isPdf ? `` : `px-8 py-5`}
      $gridArea={isPdf ? "" : gridArea}
      $isPdf={isPdf}
      $pdfOrder={pdfOrder}
      $pdfWidth={pdfWidth}
    >
      <div className="bg rounded-xl" />
      <div className="min-h-0">
        {/* <div className="top-0 z-10 bg-box text-lg md:text-xl pb-2">Header</div> */}
        <div className={isPdf ? "text-xs" : "text-base"}>{children}</div>
      </div>
    </SBox>
  );
}
