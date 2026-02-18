import { ReactNode } from "react";
import styled from "styled-components";

const SBox = styled.div<{ $gridArea?: string }>`
  ${({ $gridArea }) => $gridArea && `grid-area: ${$gridArea};`}
`;

type BoxProps = {
  children?: ReactNode;
  gridArea?: string;
};

export default function Box({ children, gridArea }: BoxProps) {
  return (
    <SBox
      className={`bg-box rounded-xl px-5 pt-3 pb-3 flex flex-col min-h-0`}
      $gridArea={gridArea}
    >
      <div className="min-h-0">
        {/* <div className="top-0 z-10 bg-box text-lg md:text-xl pb-2">Header</div> */}
        <div className="text-sm md:text-base">{children}</div>
      </div>
    </SBox>
  );
}
