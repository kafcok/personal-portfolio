import { useContext } from "react";
import { MainContext } from "../Contexts";
import { useLanguages } from "../hooks/useGetData";
import Spinner from "../Spinner";
import SectionHeader from "../SectionHeader";
import * as Icon from "../Icons";

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
      <SectionHeader text={data?.[`header_${lang}`]} />
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
