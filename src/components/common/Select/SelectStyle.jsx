import styled from "styled-components";
import theme from "../../../styles/theme";

export const { font } = theme;
export const DropDown = styled.div`
  width: 320px;
  height: 50px;
  position: relative;
`;

export const Selected = styled.div`
  cursor: pointer;
  border: ${(props) =>
    props.isOpen ? "2px solid #555555" : "1px solid #cccccc"};
  border-radius: 8px;
  padding: 16px 12px;
  color: ${(props) => (props.isOpen ? "#181818" : "#555555")};
  display: flex;
  justify-content: space-between;
`;

export const Options = styled.ul`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  color: ${(props) => (props.isOpen ? "#181818" : "#555555")};
  font: ${(font) => font.H5Regular};
  list-style: none;
  border-radius: 8px;
  border: 1px solid #cccccc;
  padding: 0px;
  margin: 8px 0px 0px;
`;
export const OptionList = styled.li`
  padding: 16px 12px;
  border-radius: 8px;
  &:hover {
    background-color: #f6f6f6;
  }
`;
