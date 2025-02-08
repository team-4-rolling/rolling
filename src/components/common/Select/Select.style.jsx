import styled from "styled-components";
import theme from "../../../styles/theme";

export const DropDown = styled.div`
  width: 320px;
  height: 50px;
  position: relative;
  z-index: 100;
`;

export const Selected = styled.div`
  background-color: ${theme.color.White};
  cursor: pointer;
  border: ${({ isOpen }) =>
    isOpen
      ? `2px solid ${theme.color.Grayscale500}`
      : `1px solid ${theme.color.Grayscale300}`};
  border-radius: 8px;
  padding: 16px 12px;
  color: ${({ isOpen }) =>
    isOpen ? theme.color.Grayscale900 : theme.color.Grayscale500};
  display: flex;
  justify-content: space-between;
`;

export const Options = styled.ul`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background-color: ${theme.color.White};
  color: ${({ isOpen }) =>
    isOpen ? theme.color.Grayscale900 : theme.color.Grayscale500};
  font: ${theme.font.H5Regular};
  list-style: none;
  border-radius: 8px;
  border: ${`1px solid ${theme.color.Grayscale300}`};
  padding: 0px;
  margin: 8px 0px 0px;
`;
export const OptionList = styled.li`
  padding: 16px 12px;
  border-radius: 8px;
  background-color: ${theme.color.White};
  &:hover {
    background-color: ${theme.color.Grayscale100};
  }
`;
