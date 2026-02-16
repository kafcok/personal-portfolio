// import { Children } from "react";

export default function Box({ children, gridArea }) {
  return (
    <div
      className={`bg-box rounded-xl px-5 pt-3 pb-3 flex flex-col min-h-0 ${gridArea ? `${gridArea}` : ""}`}
    >
      <div className="overflow-auto min-h-0 scrollbar">
        <div className="sticky top-0 z-10 bg-box text-lg md:text-xl pb-2">
          Header
        </div>
        <div className="text-sm md:text-base">{children}</div>
      </div>
    </div>
  );
}
