import { useContext, useEffect, useState } from "react";
import { MainContext } from "../Contexts";
import { useExperience } from "../hooks/useGetData";
import { useTranslation } from "react-i18next";
import ListJobs from "../ListJobs";

export default function Experience() {
  const q_key = "experience";
  const { lang } = useContext(MainContext);
  const { isLoading, data, error, status } = useExperience({ q_key, lang });
  const { t } = useTranslation();
  const [jobs, setJobs] = useState([]);

  useEffect(
    function () {
      if (data) {
        setJobs(data.experience_jobs);
      }
    },
    [data],
  );

  // useEffect(
  //   function () {
  //     console.log(jobs);
  //   },
  //   [jobs],
  // );

  if (error) {
    return <p className="text-error">{error.message}</p>;
  }

  if (isLoading) {
    return <p>{status}</p>;
  }

  return (
    <>
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        {data?.[`header_${lang}`]}
      </h2>
      <ListJobs jobs={jobs} />
    </>
  );
}
