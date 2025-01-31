import * as S from "./Icons.styles";
import arrowOpen from "../../assets/icons/arrowOpen.svg";
import arrowClose from "../../assets/icons/arrowClose.svg";
import { useState } from "react";

export default function Icons({ topReactions }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Icons>
      {topReactions.map((i) => (
        <S.IconContainer key={i.id}>
          <S.Icon>{i.emoji}</S.Icon>
          <S.Count>{i.count}</S.Count>
        </S.IconContainer>
      ))}
      {isOpen ? (
        <img src={arrowOpen} alt="" />
      ) : (
        <img src={arrowClose} alt="" />
      )}
    </S.Icons>
  );
}
