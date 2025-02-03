import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  position: relative;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
    padding: 6px;
    margin: 6px 0;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

export const IconContainer = styled.div`
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  padding: 12px 16px;
  border-radius: 32px;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;

  @media (max-width: 480px) {
    height: 28px;
    padding: 8px 12px;
  }
`;

export const Icon = styled.div`
  margin-top: 2px;
  font-size: 20px;
`;

export const Count = styled.div`
  font: ${theme.font.H5Regular};
  color: ${theme.color.White};

  @media (max-width: 480px) {
    font: ${theme.font.H7Regular};
  }
`;

export const Reactions = styled.div`
  display: grid;
  grid-template-columns: ${({ $columns }) => `repeat(${$columns}, 1fr)`};
  grid-template-rows: 1fr, 1fr;
  gap: 8px;
  padding: 24px 20px;
  background-color: ${theme.color.White};
  border: 1px solid #b6b6b6;
  border-radius: 8px;
  position: absolute;
  top: 120%;
  right: 0;

  @media (max-width: 480px) {
    grid-template-columns: ${({ $responsiveColumns }) =>
      `repeat(${$responsiveColumns}, 1fr)`};
    grid-template-rows: 1fr, 1fr;
    padding: 16px 14px;
    gap: 8px;
    & > :nth-child(7),
    & > :nth-child(8) {
      display: none;
    }
  }
`;
