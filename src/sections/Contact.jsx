import { useContext } from "react";
import { MainContext } from "../Contexts";
import { useContact } from "../hooks/useGetData";
import Spinner from "../Spinner";
import { useTranslation } from "react-i18next";
import SectionHeader from "../SectionHeader";
import * as Icon from "../Icons";
import styled from "styled-components";

const SContact = styled.div`
  a:hover {
    text-decoration: underline;
  }
`;

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
      <SectionHeader
        text={data?.[`header_${lang}`]}
        icon={<Icon.Contact cls_hlp="ml-3 w-[30px] h-[30px]" />}
      />
      <SContact
        className="content text-lg font-bold text-accent"
        dangerouslySetInnerHTML={{ __html: data?.[`content_${lang}`] }}
      ></SContact>
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
