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
  transition: transform 0.3s ease-in-out ${({ $delay }) => $delay * 0.1}s;
  ${({ $isVisible }) =>
    $isVisible ? `transform: scale(1);` : `transform: scale(0);`}

  ${({ $isFull, $isVisible, $delay }) =>
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
      transition: transform 0.3s ease-in-out ${$delay * 0.1 + 0.3}s;
      transform: ${$isVisible ? "scale(1)" : "scale(0)"};
    }
  `}
`;

export default function StarsGrade({ level, isVisible }) {
  const [stars, setStars] = useState([]);

  useEffect(
    function () {
      let temp = [];
      for (let i = 0; i < 5; i++) {
        temp.push(
          <SStar
            key={i}
            $isFull={level > i}
            $delay={i}
            $isVisible={isVisible}
          />,
        );
      }
      setStars(temp);
    },
    [level, isVisible],
  );

  return (
    <SGrade>
      {stars.map((star) => {
        return star;
      })}
    </SGrade>
  );
}
