import { useContext } from "react";
import { MainContext } from "../Contexts";
import { useLanguages } from "../hooks/useGetData";
import Spinner from "../Spinner";

export default function Languages() {
  const q_key = "languages";
  const { lang } = useContext(MainContext);
  const { isLoading, data, error } = useLanguages({ q_key, lang });

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
      <ul>
        {data?.languages_items.map((item) => {
          return (
            <li className="capitalize" key={item.id}>
              {item?.[`name_${lang}`]} - {item?.[`level_${lang}`]}
            </li>
          );
        })}
      </ul>
    </>
  );
}
