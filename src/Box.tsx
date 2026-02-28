import { ReactNode, useContext } from "react";
import styled from "styled-components";
import { MainContext } from "./Contexts";

const SBox = styled.div<{ $gridArea?: string }>`
  ${({ $gridArea }) => $gridArea && `grid-area: ${$gridArea};`}
  /* background-color: var(--color-box); */
  /* opacity: 0.5; */
  /* overflow: hidden; */
  position: relative;
  z-index: 1;
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
`;

type BoxProps = {
  children?: ReactNode;
  gridArea?: string;
};

export default function Box({ children, gridArea }: BoxProps) {
  const { isPdf } = useContext(MainContext);
  return (
    <SBox
      className={isPdf ? `` : `px-8 py-5`}
      $gridArea={isPdf ? "" : gridArea}
    >
      <div className="bg rounded-xl" />
      <div className="min-h-0">
        {/* <div className="top-0 z-10 bg-box text-lg md:text-xl pb-2">Header</div> */}
        <div className={isPdf ? "text-xs" : "text-base"}>{children}</div>
      </div>
    </SBox>
  );
}
