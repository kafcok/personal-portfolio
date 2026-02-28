import { useContext, useEffect, useState } from "react";
import { MainContext } from "../Contexts";
import { useTechStack } from "../hooks/useGetData";
import Spinner from "../Spinner";
import SectionHeader from "../SectionHeader";

export default function TechStack() {
  const q_key = "tech";
  const { lang } = useContext(MainContext);
  const { isLoading, data, error, status } = useTechStack({ q_key, lang });
  const [skills, setSkills] = useState([]);

  useEffect(
    function () {
      if (data) {
        setSkills(data.tech_skills);
      }
    },
    [data],
  );

  useEffect(
    function () {
      // console.log(skills);
    },
    [skills],
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
      {skills.length > 0 ? (
        <ul>
          {skills.map(function (item) {
            return (
              <li key={item.id}>
                {item.label} {item.level}
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </>
  );
}
