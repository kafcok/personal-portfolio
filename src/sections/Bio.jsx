import { useContext, useEffect, useState } from "react";
import { MainContext } from "../Contexts";
import { useBio } from "../hooks/useGetData";
import Spinner from "../Spinner";
import SectionHeader from "../SectionHeader";
import * as Icon from "../Icons";

export default function Bio() {
  const q_key = "bio";
  const { lang, isPdf } = useContext(MainContext);
  const { isLoading, data, error } = useBio({ q_key, lang });
  const [bioContent, setBioContent] = useState({ __html: "" });

  useEffect(
    function () {
      let temp = data?.[`description_${lang}`];
      if (isPdf) {
        temp.replace("&#8209;", "-");
      }
      setBioContent({ __html: temp });
    },
    [data, isPdf, lang],
  );

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
        icon={<Icon.Info cls_hlp="ml-3 w-[30px] h-[30px]" />}
      />
      <div dangerouslySetInnerHTML={bioContent} />
    </>
  );
}
