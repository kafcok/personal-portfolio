import { useContext } from "react";
import { MainContext } from "../Contexts";
import { useBio } from "../hooks/useGetData";

export default function Bio() {
  const q_key = "bio";
  const { lang } = useContext(MainContext);
  const { isLoading, data: bio, error, status } = useBio({ q_key, lang });

  if (error) {
    return <p className="text-error">{error.message}</p>;
  }

  if (isLoading) {
    return <p>{status}</p>;
  }

  return (
    <>
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        {bio?.[`header_${lang}`]}
      </h2>
      <p>{bio?.[`description_${lang}`]}</p>
    </>
  );
}
