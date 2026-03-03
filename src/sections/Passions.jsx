import { useContext } from "react";
import { MainContext } from "../Contexts";
import { usePassions } from "../hooks/useGetData";
import styled from "styled-components";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Spinner from "../Spinner";
import SectionHeader from "../SectionHeader";
import * as Icon from "../Icons";

const SPassionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  > li {
    white-space: nowrap;
    > span {
      color: var(--color-accent);
      margin: 0 30px;
    }
    &:last-child {
      > span {
        display: none;
      }
    }
  }
`;

export default function Passions() {
  const q_key = "passions";
  const { lang } = useContext(MainContext);
  const { isLoading, data, error } = usePassions({ q_key, lang });

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
        icon={<Icon.Heart cls_hlp="ml-3 w-[30px] h-[30px]" />}
      />
      <SPassionsList>
        {data?.passions_items?.map((item) => {
          return (
            <li key={item.id}>
              {item.image ? (
                <Tippy
                  content={
                    <div style={{ maxWidth: 500 }}>
                      <img
                        src={item.image}
                        alt={item?.[`name_${lang}`]}
                        style={{ width: "100%", borderRadius: 8 }}
                      />
                    </div>
                  }
                  placement="top"
                  interactive={true}
                  delay={[100, 200]}
                >
                  <button className="cursor-pointer underline">
                    {item?.[`name_${lang}`]}
                  </button>
                </Tippy>
              ) : (
                item?.[`name_${lang}`]
              )}
              <span>||</span>
            </li>
          );
        })}
      </SPassionsList>
    </>
  );
}
