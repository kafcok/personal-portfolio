import { useTranslation } from "react-i18next";
import { formatMonthYear } from "../hooks/useLanguage";
import styled from "styled-components";
import { useContext } from "react";
import { MainContext } from "../Contexts";

const SListResp = styled.ul`
  margin-bottom: 10px;
  > li {
    padding-left: 10px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 4px;
      height: 4px;
      ${({ $isPdf }) => ($isPdf ? `top: 5px;` : `top: 11px;`)}
      left: 0px;
      border-radius: 2px;
      background-color: currentColor;
    }
  }
`;

const SListJobs = styled.ul`
  container-type: inline-size;
`;

const SJobItem = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  ${({ $isPdf }) => ($isPdf ? `margin-bottom: 10px;` : `margin-bottom: 30px;`)}

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-foreground);
    ${({ $isPdf }) =>
      $isPdf ? `padding-bottom: 15px;` : `padding-bottom: 40px;`}
  }

  ${({ $isPdf }) =>
    $isPdf
      ? `grid-template-columns: 28% auto;`
      : `@container (min-width: 600px) {
        grid-template-columns: 40% auto;
      }`}
`;

export default function ListJobs({ jobs }) {
  return jobs.length > 0 ? (
    <SListJobs>
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
    </SListJobs>
  ) : null;
}

const Job = function ({ job }) {
  const { t } = useTranslation();
  const { isPdf } = useContext(MainContext);

  const {
    name,
    function_en,
    function_pl,
    responsibilities_en,
    responsibilities_pl,
    end_date,
    start_date,
    url,
  } = job;

  const startDateLabel = formatMonthYear(start_date);
  const endDateLabel = formatMonthYear(end_date) || t("present");

  const role = function_pl ?? function_en;
  const resp = responsibilities_pl ?? responsibilities_en;

  return (
    <SJobItem $isPdf={isPdf}>
      <div>
        <p className="text-accent capitalize font-bold">
          {startDateLabel} - {endDateLabel}
        </p>
        <h2>{role}</h2>
        <h3>
          {url ? (
            <a href={url} rel="noreferrer" target="_blank">
              {name}🔗
            </a>
          ) : (
            name
          )}
        </h3>
      </div>
      <ListResponsibilities resp={resp} />
    </SJobItem>
  );
};

const ListResponsibilities = function ({ resp }) {
  const { t } = useTranslation();
  const { isPdf } = useContext(MainContext);
  return (
    <>
      {resp.length > 0 ? (
        <div>
          <h3 className="text-accent font-bold">{t("Responsibilities")}:</h3>
          <SListResp $isPdf={isPdf}>
            {resp.map((item, key) => {
              return <li key={key}>{item}</li>;
            })}
          </SListResp>
        </div>
      ) : null}
    </>
  );
};
