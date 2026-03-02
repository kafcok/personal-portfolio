import { useContext, useEffect, useState } from "react";
import { MainContext } from "../Contexts";
import { useStrengths } from "../hooks/useGetData";
import Spinner from "../Spinner";
import SectionHeader from "../SectionHeader";
import * as Icon from "../Icons";

export default function Strengths() {
  const q_key = "strengths";
  const { lang } = useContext(MainContext);
  const { isLoading, data, error } = useStrengths({ q_key, lang });
  const [strengths, setStrengths] = useState([]);

  useEffect(
    function () {
      if (data) {
        setStrengths(data.strengths_pros);
      }
    },
    [data],
  );

  if (error) {
    return <p className="text-error">{error.message}</p>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <SectionHeader text={data?.[`header_${lang}`]} />
      {strengths.length > 0 ? (
        <ul>
          {strengths.map(function (item) {
            return <li key={item.id}>{item?.[`name_${lang}`]}</li>;
          })}
        </ul>
      ) : (
        ""
      )}
    </>
  );
}
