import { useEffect, useState } from "react";
import styled from "styled-components";

const SGrade = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  gap: 2px;
`;
const SStar = styled.div`
  width: 10px;
  height: 10px;

  ${({ $isFull }) =>
    $isFull ? `background-color: green;` : `background-color: red;`}
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
