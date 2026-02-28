import { useContext, useEffect, useState } from "react";
import { MainContext } from "../Contexts";
import { useExperience } from "../hooks/useGetData";
import { useTranslation } from "react-i18next";
import ListJobs from "./ListJobs";
import Spinner from "../Spinner";
import SectionHeader from "../SectionHeader";

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

  if (error) {
    return <p className="text-error">{error.message}</p>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <SectionHeader text={data?.[`header_${lang}`]} />
      <ListJobs jobs={jobs} />
    </>
  );
}
