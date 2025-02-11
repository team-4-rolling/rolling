import styled from "styled-components";
import theme from "../../../styles/theme";

export const DropDown = styled.div`
  width: 320px;
  height: 50px;
  position: relative;
`;

export const Selected = styled.div`
  background-color: ${theme.color.White};
  cursor: pointer;
  border: ${({ $isOpen }) =>
    $isOpen
      ? `2px solid ${theme.color.Grayscale500}`
      : `1px solid ${theme.color.Grayscale300}`};
  border-radius: 8px;
  padding: 16px 12px;
  color: ${({ $isOpen }) =>
    $isOpen ? theme.color.Grayscale900 : theme.color.Grayscale500};
  display: flex;
  justify-content: space-between;
  z-index: 99;
`;

export const Options = styled.ul`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  background-color: ${theme.color.White};
  color: ${({ $isOpen }) =>
    $isOpen ? theme.color.Grayscale900 : theme.color.Grayscale500};
  font: ${theme.font.H5Regular};
  list-style: none;
  border-radius: 8px;
  border: ${`1px solid ${theme.color.Grayscale300}`};
  padding: 0px;
  width: 100%;
  position: absolute;
  top: 100%;
  transform: translateY(8px);
  left: 0;
  z-index: 101;
`;
export const OptionList = styled.li`
  padding: 16px 12px;
  border-radius: 8px;
  background-color: ${theme.color.White};
  &:hover {
    background-color: ${theme.color.Grayscale100};
  }
`;
