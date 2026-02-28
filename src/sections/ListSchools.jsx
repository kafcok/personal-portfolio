// import { useTranslation } from "react-i18next";
import { formatMonthYear } from "../hooks/useLanguage";
// import { useEffect } from "react";
import styled from "styled-components";

const SListSchools = styled.ul`
  container-type: inline-size;
`;

const SSchoolItem = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 30px;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-foreground);
    padding-bottom: 40px;
  }
  @container (min-width: 600px) {
    /* grid-template-columns: 40% auto; */
  }
`;

export default function ListSchools({ schools }) {
  return schools.length > 0 ? (
    <SListSchools>
      {schools.map((school) => {
        return <School key={school.id} school={school} />;
      })}
    </SListSchools>
  ) : null;
}

const School = function ({ school }) {
  const {
    name_pl,
    name_en,
    specialization_pl,
    specialization_en,
    end_date,
    start_date,
  } = school;

  const startDateLabel = formatMonthYear(start_date);
  const endDateLabel = formatMonthYear(end_date);

  const name = name_pl ?? name_en;
  const specialization = specialization_pl ?? specialization_en;

  return (
    <SSchoolItem>
      <div>
        <p className="text-accent capitalize">
          {startDateLabel} - {endDateLabel}
        </p>
        <h2>{name}</h2>
        <h3>{specialization}</h3>
      </div>
    </SSchoolItem>
  );
};
