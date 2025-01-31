import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  position: relative;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 24px;
    height: 24px;
    padding: 6px;
  }
`;

export const IconContainer = styled.div`
  width: 63px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  padding: 8px 12px;
  border-radius: 32px;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

export const Icon = styled.div`
  margin-top: 2px;
  font-size: 20px;
`;

export const Count = styled.div`
  font: ${theme.font.H5Regular};
  color: ${theme.color.White};
`;

export const Reactions = styled.div`
  width: 248px;
  height: 134px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr, 1fr;
  gap: 10px;
  padding: 24px 20px;
  background-color: ${theme.color.White};
  border: 1px solid #b6b6b6;
  border-radius: 8px;
  position: absolute;
  top: 120%;
  right: 0;
`;
