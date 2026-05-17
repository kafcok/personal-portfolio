import * as Icon from "../Icons";
import { formatMonthYear } from "../lib/formatMonthYear";
import { translate } from "../lib/translations";

function SectionHeader({ text, icon }) {
  const label = typeof text === "string" ? text.trim() : text;

  return (
    <h2 className="text-xl md:text-3xl mb-3 font-bold whitespace-nowrap flex items-center">
      {label}
      <span className="inline-block">{icon}</span>
    </h2>
  );
}

function SectionError({ message }) {
  return <p className="text-error">{message}</p>;
}

export function BioSection({ section, lang }) {
  if (section.error) return <SectionError message={section.error} />;

  const html = section.data?.[`description_${lang}`] ?? "";

  return (
    <>
      <SectionHeader
        text={section.data?.[`header_${lang}`]}
        icon={<Icon.Info cls_hlp="ml-3 w-[30px] h-[30px]" />}
      />
      <div
        className="server-bio"
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </>
  );
}

export function ContactSection({ section, lang }) {
  if (section.error) return <SectionError message={section.error} />;

  return (
    <>
      <SectionHeader
        text={section.data?.[`header_${lang}`]}
        icon={<Icon.Contact cls_hlp="ml-3 w-[30px] h-[30px]" />}
      />
      <div
        className="server-contact content text-lg font-bold text-accent"
        dangerouslySetInnerHTML={{ __html: section.data?.[`content_${lang}`] }}
      />
    </>
  );
}

export function TechStackSection({ section, lang }) {
  if (section.error) return <SectionError message={section.error} />;

  return (
    <>
      <SectionHeader
        text={section.data?.header}
        icon={<Icon.Tech cls_hlp="ml-3 w-[30px] h-[30px]" />}
      />
      <SkillsList
        title={translate(lang, "Primary")}
        items={section.data?.primary}
      />
      <SkillsList
        title={translate(lang, "Secondary")}
        items={section.data?.secondary}
        className="mt-5"
      />
      <SkillsList
        title={translate(lang, "Additional")}
        items={section.data?.tertiary}
        className="mt-5"
      />
    </>
  );
}

function SkillsList({ title, items = [], className = "" }) {
  if (!items.length) return null;

  return (
    <div className={className}>
      <h4 className="mb-2">{title}:</h4>
      <ul className="server-skills">
        {items.map((item) => (
          <li key={item.id}>
            {item.icon ? Icon.render(item.icon, "w-6 h-6") : null}
            <span className="label">{item.label}</span>
            <Stars level={item.level} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Stars({ level }) {
  return (
    <span className="server-stars">
      {Array.from({ length: 5 }, (_, index) => (
        <span
          aria-hidden="true"
          className={level > index ? "full" : ""}
          key={index}
        />
      ))}
    </span>
  );
}

export function ExperienceSection({ section, lang }) {
  if (section.error) return <SectionError message={section.error} />;

  const jobs = section.data?.experience_jobs ?? [];

  return (
    <>
      <SectionHeader
        text={section.data?.[`header_${lang}`]}
        icon={<Icon.Experience cls_hlp="ml-3 w-[30px] h-[30px]" />}
      />
      <ul className="server-jobs">
        {jobs.map((job) => (
          <Job job={job} key={job.id} lang={lang} />
        ))}
      </ul>
    </>
  );
}

function Job({ job, lang }) {
  const role = job[`function_${lang}`];
  const responsibilities = job[`responsibilities_${lang}`] ?? [];
  const startDateLabel = formatMonthYear(job.start_date, lang);
  const endDateLabel =
    formatMonthYear(job.end_date, lang) || translate(lang, "present");

  return (
    <li className={`server-job`}>
      <div>
        <p className="text-accent capitalize font-bold">
          {startDateLabel} - {endDateLabel}
        </p>
        <h2>{role}</h2>
        <h3>
          {job.url ? (
            <a href={job.url} rel="noreferrer" target="_blank">
              {job.name}
            </a>
          ) : (
            job.name
          )}
        </h3>
      </div>
      {responsibilities.length > 0 ? (
        <div>
          <h3 className="text-accent font-bold">
            {translate(lang, "Responsibilities")}:
          </h3>
          <ul className={`server-responsibilities`}>
            {responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </li>
  );
}

export function EducationSection({ section, lang }) {
  if (section.error) return <SectionError message={section.error} />;

  const schools = section.data?.education_school ?? [];

  return (
    <>
      <SectionHeader
        text={section.data?.[`header_${lang}`]}
        icon={<Icon.Edu cls_hlp="ml-3 w-[30px] h-[30px]" />}
      />
      <ul className="server-schools">
        {schools.map((school) => (
          <School school={school} key={school.id} lang={lang} />
        ))}
      </ul>
    </>
  );
}

function School({ school, lang }) {
  return (
    <li>
      <div>
        <p className="text-accent capitalize font-bold">
          {formatMonthYear(school.start_date, lang)} -{" "}
          {formatMonthYear(school.end_date, lang)}
        </p>
        <h2>{school[`name_${lang}`]}</h2>
        <h3>{school[`specialization_${lang}`]}</h3>
      </div>
    </li>
  );
}

export function StrengthsSection({ section, lang }) {
  if (section.error) return <SectionError message={section.error} />;

  const strengths = section.data?.strengths_pros ?? [];

  return (
    <>
      <SectionHeader
        text={section.data?.[`header_${lang}`]}
        icon={<Icon.Bicep cls_hlp="ml-3 w-[30px] h-[30px]" />}
      />
      {strengths.length > 0 ? (
        <ul className="server-strengths">
          {strengths.map((item) => (
            <li key={item.id}>{item?.[`name_${lang}`]}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

export function LanguagesSection({ section, lang }) {
  if (section.error) return <SectionError message={section.error} />;

  return (
    <>
      <SectionHeader
        text={section.data?.[`header_${lang}`]}
        icon={<Icon.Lang cls_hlp="ml-3 w-[30px] h-[30px]" />}
      />
      <ul>
        {section.data?.languages_items.map((item) => (
          <li className="capitalize" key={item.id}>
            {item?.[`name_${lang}`]} - {item?.[`level_${lang}`]}
          </li>
        ))}
      </ul>
    </>
  );
}

export function PassionsSection({ section, lang }) {
  if (section.error) return <SectionError message={section.error} />;

  return (
    <>
      <SectionHeader
        text={section.data?.[`header_${lang}`]}
        icon={<Icon.Heart cls_hlp="ml-3 w-[30px] h-[30px]" />}
      />
      <ul className="server-passions">
        {section.data?.passions_items?.map((item) => (
          <li key={item.id}>
            {item.image ? (
              <span className="server-passion-with-image">
                <button className="cursor-pointer underline">
                  {item?.[`name_${lang}`]}
                </button>
                <span className="server-passion-preview">
                  <img src={item.image} alt={item?.[`name_${lang}`]} />
                </span>
              </span>
            ) : (
              item?.[`name_${lang}`]
            )}
            <span className="separator">||</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export function Disclaimer({ lang }) {
  return (
    <p className="server-disclaimer">
      {lang === "pl"
        ? "Wyrazam zgode na przetwarzanie moich danych osobowych zawartych w CV w celu przeprowadzenia obecnego oraz przyszlych procesow rekrutacyjnych zgodnie z Rozporzadzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO)."
        : "I consent to the processing of my personal data contained in my CV for the purposes of current and future recruitment processes in accordance with Regulation (EU) 2016/679 of the European Parliament and of the Council (GDPR)."}
    </p>
  );
}
