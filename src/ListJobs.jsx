import { useTranslation } from "react-i18next";
import { formatMonthYear } from "./hooks/useLanguage";
import { useEffect } from "react";
import styled from "styled-components";

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
      top: 9px;
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
  margin-bottom: 30px;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-foreground);
    padding-bottom: 40px;
  }
  @container (min-width: 600px) {
    grid-template-columns: 40% auto;
  }
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

  //   useEffect(
  //     function () {
  //       console.log(resp);
  //     },
  //     [resp],
  //   );

  return (
    <SJobItem>
      <div>
        <p className="text-accent capitalize">
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
  return (
    <>
      {resp.length > 0 ? (
        <div>
          <h3 className="text-accent">{t("Responsibilities")}:</h3>
          <SListResp>
            {resp.map((item, key) => {
              return <li key={key}>{item}</li>;
            })}
          </SListResp>
        </div>
      ) : null}
    </>
  );
};
