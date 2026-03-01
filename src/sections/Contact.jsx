import { useContext } from "react";
import { MainContext } from "../Contexts";
import { useContact } from "../hooks/useGetData";
import Spinner from "../Spinner";
import { useTranslation } from "react-i18next";
import SectionHeader from "../SectionHeader";

export default function Contact() {
  const q_key = "contact";
  const { lang, isPdf } = useContext(MainContext);
  const { isLoading, data, error } = useContact({ q_key, lang });
  const { t } = useTranslation();
  const siteURL = import.meta.env.VITE_SITE_URL;

  if (error) {
    return <p className="text-error">{error.message}</p>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <SectionHeader text={data?.[`header_${lang}`]} />
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: data?.[`content_${lang}`] }}
      ></div>
      <div>
        {isPdf ? (
          <a href={siteURL} target="_blank" rel="noreferrer">
            {t("Personal Portfolio [LINK]")}
          </a>
        ) : null}
      </div>
    </>
  );
}
