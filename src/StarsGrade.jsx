import { useEffect, useState } from "react";
import styled from "styled-components";

const SGrade = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  gap: 4px;
`;
const SStar = styled.div`
  width: 14px;
  height: 14px;
  background-image: url("/icons/star-empty.svg");
  background-size: contain;
  background-position: center;
  position: relative;

  ${({ $isFull }) =>
    $isFull &&
    `
    &:before{
      content:'';
      position: absolute;
      width: 14px;
      height: 14px;
      background-image: url("/icons/star-full.svg");
      background-size: contain;
      background-position: center;
      z-index: -1;
    }
  `}
`;

export default function StarsGrade({ level, delay }) {
  const [stars, setStars] = useState([]);

  useEffect(
    function () {
      let temp = [];
      for (let i = 0; i < 5; i++) {
        temp.push(<SStar key={i} $isFull={level > i} />);
      }
      setStars(temp);
    },
    [level],
  );

  return (
    <SGrade>
      {stars.map((star) => {
        return star;
      })}
    </SGrade>
  );
}
