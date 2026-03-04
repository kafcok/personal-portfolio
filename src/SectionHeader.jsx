import { useContext } from "react";
import { MainContext } from "./Contexts";

export default function SectionHeader({ text, icon }) {
  const { isPdf } = useContext(MainContext);
  return (
    <h2
      className={`${isPdf ? "text-base" : "text-xl md:text-3xl mb-3"} font-bold whitespace-nowrap flex items-center`}
    >
      {text}
      <span className="inline-block">{icon}</span>
    </h2>
  );
}
