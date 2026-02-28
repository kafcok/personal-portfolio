import { useContext } from "react";
import { MainContext } from "./Contexts";

export default function SectionHeader({ text }) {
  const { isPdf } = useContext(MainContext);
  return (
    <h2
      className={`${isPdf ? "text-base" : "text-2xl md:text-3xl mb-3"} font-bold`}
    >
      {text}
    </h2>
  );
}
