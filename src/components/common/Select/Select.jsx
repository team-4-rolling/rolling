import React, { useState } from "react";
import * as S from "./Select.style";
import arrowOpen from "../../../assets/icons/arrowOpen.svg";
import arrowClose from "../../../assets/icons/arrowClose.svg";
//

function Select({ options, onChange }) {
  const [selected, setSelected] = useState(
    options ? options[0] : "options배열 필요"
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <>
      <S.DropDown>
        <S.Selected isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {selected}
          {isOpen ? (
            <img src={arrowOpen} alt="^" />
          ) : (
            <img src={arrowClose} alt="\/" />
          )}
        </S.Selected>
        <S.Options isOpen={isOpen}>
          {options.map((option) => (
            <S.OptionList
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </S.OptionList>
          ))}
        </S.Options>
      </S.DropDown>
    </>
  );
}
export default Select;
