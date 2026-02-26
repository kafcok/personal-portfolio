import { useContext, useEffect, useState } from "react";
import { MainContext } from "../Contexts";
import { useEducation } from "../hooks/useGetData";
import { useTranslation } from "react-i18next";
import ListSchools from "./ListSchools";
import Spinner from "../Spinner";

export default function Education() {
  const q_key = "education";
  const { lang } = useContext(MainContext);
  const { isLoading, data, error } = useEducation({ q_key, lang });
  const { t } = useTranslation();
  const [schools, setSchools] = useState([]);

  useEffect(
    function () {
      if (data) {
        setSchools(data.education_school);
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
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        {data?.[`header_${lang}`]}
      </h2>
      <ListSchools schools={schools} />
    </>
  );
}
