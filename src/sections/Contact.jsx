import { useContext } from "react";
import { MainContext } from "../Contexts";
import { useContact } from "../hooks/useGetData";
import Spinner from "../Spinner";

export default function Contact() {
  const q_key = "contact";
  const { lang } = useContext(MainContext);
  const { isLoading, data, error } = useContact({ q_key, lang });

  if (error) {
    return <p className="text-error">{error.message}</p>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        {data?.[`header_${lang}`]}
      </h2>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: data?.[`content_${lang}`] }}
      ></div>
    </>
  );
}
