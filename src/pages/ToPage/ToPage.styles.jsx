import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 40px;

  @media (max-width: 480px) {
    padding: 0;
  }
`;

export const ToContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  max-width: 720px;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 100%;
  max-width: 720px;

  @media (max-width: 480px) {
    max-width: 100%;
    width: 100%;
    padding: 0 16px;
  }
`;

export const Title = styled.div`
  font: ${theme.font.H2Bold};
  color: ${theme.color.Grayscale900};
  margin-top: 10px;
  height: 30px;
`;

export const SubTitle = styled.div`
  font: ${theme.font.H5Regular};
  color: ${theme.color.Grayscale500};
  height: 26px;
`;

export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  width: 100%;
  margin: 20px 0;
  justify-content: flex-start;

  @media (max-width: 480px) {
    justify-content: flex-start;
  }
`;

export const ToggleWrapper = styled.div`
  display: flex;
  position: relative;
  width: 244px;
  height: 40px;
  border-radius: 8px;
  background: ${theme.color.Grayscale200};
  text-align: center;
  margin-top: 0;
  overflow: hidden;
`;

export const ToggleOption = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 10px 20px;
  font: ${theme.font.H6Regular};
  text-align: center;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  background: ${({ $active }) =>
    $active ? "white" : theme.color.Grayscale200};
  color: ${({ $active }) =>
    $active ? theme.color.Purple600 : theme.color.Grayscale700};
  border: ${({ $active }) =>
    $active ? `2px solid ${theme.color.Purple600}` : "none"};
`;

export const CheckIcon = styled.img`
  position: absolute;
  width: 44px;
  height: 44px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100%;

  @media (max-width: 480px) {
    justify-content: center;
    padding: 0 16px;
    width: 100%;
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding: 0 24px;
    width: 100%;
  }

  @media (max-width: 1280px) {
    justify-content: center;
    padding: 0 32px;
    width: 100%;
  }
`;
