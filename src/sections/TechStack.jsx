import { useContext, useEffect, useState } from "react";
import { MainContext } from "../Contexts";
import { useTechStack } from "../hooks/useGetData";
import Spinner from "../Spinner";
import SectionHeader from "../SectionHeader";
import * as Icon from "../Icons";
import StarsGrade from "../StarsGrade";

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

  // useEffect(
  //   function () {
  //     console.log(skills);
  //   },
  //   [skills],
  // );

  if (error) {
    return <p className="text-error">{error.message}</p>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <SectionHeader
        text={data?.[`header_${lang}`]}
        icon={<Icon.Tech cls_hlp="ml-3 w-[30px] h-[30px]" />}
      />
      {skills.length > 0 ? (
        <ul>
          {skills.map(function (item, key) {
            return (
              <li key={item.id}>
                {item.icon ? Icon.render(item.icon, "w-4 h-4 mr-3") : null}
                {item.label} <StarsGrade level={item.level} delay={key} />
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
