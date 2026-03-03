import { useContext, useEffect, useState } from "react";
import { MainContext } from "../Contexts";
import { useTechStack } from "../hooks/useGetData";
import Spinner from "../Spinner";
import SectionHeader from "../SectionHeader";
import * as Icon from "../Icons";
import StarsGrade from "../StarsGrade";
import styled from "styled-components";

const SList = styled.ul`
  font-size: 18px;
  > li {
    margin-bottom: 5px;
    display: flex;
    gap: 15px;
    align-items: center;
    flex-wrap: nowrap;
    > .label {
      flex: 1 0 50%;
      max-width: 100px;
    }
  }
`;

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
        <SList>
          {skills.map(function (item, key) {
            return (
              <li key={item.id}>
                {item.icon ? Icon.render(item.icon, "w-6 h-6") : null}
                <span className="label">{item.label}</span>{" "}
                <StarsGrade level={item.level} delay={key} />
              </li>
            );
          })}
        </SList>
      ) : (
        ""
      )}
    </>
  );
}
