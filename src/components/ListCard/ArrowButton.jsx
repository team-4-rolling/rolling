import React from "react";
import arrowImage from "../../assets/icons/arrow.svg";
import { PrevButton, NextButton } from "./Listcard.style";

const ArrowButton = ({ direction, onClick, className, hidden }) => {
  if (hidden) return null; // ✅ hidden이 true면 버튼을 렌더링하지 않음

  const ButtonComponent = direction === "prev" ? PrevButton : NextButton;

  return (
    <ButtonComponent onClick={onClick} className={className}>
      <img
        src={arrowImage}
        alt={direction}
        style={{
          width: "60px",
          height: "60px",
          transform: direction === "prev" ? "rotate(180deg)" : "none",
        }}
      />
    </ButtonComponent>
  );
};

export default ArrowButton;
