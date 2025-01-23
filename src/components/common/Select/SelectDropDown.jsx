import React, { useState } from "react";
import { DropDown, Selected, Options, OptionList } from "./SelectStyle";
import arrowOpen from "../../../assets/icons/arrowOpen.svg";
import arrowClose from "../../../assets/icons/arrowClose.svg";

//

function SelectDropDown({ options }) {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <>
      <DropDown>
        <Selected isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {selected}
          {isOpen ? (
            <img src={arrowOpen} alt="^" />
          ) : (
            <img src={arrowClose} alt="\/" />
          )}
        </Selected>
        <Options isOpen={isOpen}>
          {options.map((option, index) => (
            <OptionList key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </OptionList>
          ))}
        </Options>
      </DropDown>
    </>
  );
}
export default SelectDropDown;
