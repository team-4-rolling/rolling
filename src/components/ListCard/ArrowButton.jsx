import React from "react";
import arrowImage from "../../assets/icons/arrow.svg";
import { PrevButton, NextButton } from "./Listcard.style";

const ArrowButton = ({ direction, swiperInstance, className, hidden }) => {
  if (hidden) return null;

  const ButtonComponent = direction === "prev" ? PrevButton : NextButton;

  const handleClick = () => {
    if (!swiperInstance) return;
    if (direction === "prev") {
      swiperInstance.slidePrev();
    } else {
      swiperInstance.slideNext();
    }
  };

  return (
    <ButtonComponent onClick={handleClick} className={className}>
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
