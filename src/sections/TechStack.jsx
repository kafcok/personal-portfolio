import { useContext, useEffect, useState } from "react";
import { MainContext } from "../Contexts";
import { useTechStack } from "../hooks/useGetData";
import Spinner from "../Spinner";
import SectionHeader from "../SectionHeader";
import * as Icon from "../Icons";
import StarsGrade from "../StarsGrade";
import styled from "styled-components";
import { useObserver } from "../hooks/useObserver";
import { useTranslation } from "react-i18next";

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

const SSkill = styled.li`
  transition: all 0.3s linear;
  ${({ $isVisible }) => ($isVisible ? `opacity: 1;` : `opacity: 0;`)}
`;

export default function TechStack() {
  const q_key = "tech";
  const { lang } = useContext(MainContext);
  const { t } = useTranslation();
  const { isLoading, header, primary, secondary, tertiary, error } =
    useTechStack({
      q_key,
      lang,
    });

  if (error) {
    return <p className="text-error">{error.message}</p>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <SectionHeader
        text={header}
        icon={<Icon.Tech cls_hlp="ml-3 w-[30px] h-[30px]" />}
      />
      {primary?.length > 0 && (
        <SList>
          <h4 className="mb-2">{t("Primary")}:</h4>
          {primary.map(function (item, key) {
            return <Skill key={item.id} item={item} index={key} />;
          })}
        </SList>
      )}
      {secondary?.length > 0 && (
        <SList>
          <h4 className="mt-5 mb-2">{t("Secondary")}:</h4>
          {secondary.map(function (item, key) {
            return <Skill key={item.id} item={item} index={key} />;
          })}
        </SList>
      )}
      {tertiary?.length > 0 && (
        <SList>
          <h4 className="mt-5 mb-2">{t("Additional")}:</h4>
          {tertiary.map(function (item, key) {
            return <Skill key={item.id} item={item} index={key} />;
          })}
        </SList>
      )}
    </>
  );
}

function Skill({ item }) {
  const [ref, isVisible] = useObserver({ threshold: 1 });

  return (
    <SSkill ref={ref} $isVisible={isVisible}>
      {item.icon ? Icon.render(item.icon, "w-6 h-6") : null}
      <span className="label">{item.label}</span>
      <StarsGrade level={item.level} isVisible={isVisible} />
    </SSkill>
  );
}
