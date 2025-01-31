import styled from "styled-components";
import theme from "../../styles/theme";

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
`;

export const Icon = styled.div`
  margin-top: 2px;
  font-size: 20px;
`;

export const Count = styled.div`
  font: ${theme.font.H5Regular};
  color: ${theme.color.White};
`;
