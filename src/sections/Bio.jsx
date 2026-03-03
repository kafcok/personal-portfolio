import { useContext } from "react";
import { MainContext } from "../Contexts";
import { useBio } from "../hooks/useGetData";
import Spinner from "../Spinner";
import SectionHeader from "../SectionHeader";
import * as Icon from "../Icons";

export default function Bio() {
  const q_key = "bio";
  const { lang } = useContext(MainContext);
  const { isLoading, data, error } = useBio({ q_key, lang });

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
      <div
        dangerouslySetInnerHTML={{ __html: data?.[`description_${lang}`] }}
      />
    </>
  );
}
