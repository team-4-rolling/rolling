import styled from "styled-components";
import theme from "../../styles/theme";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 40px;
  margin: 0 auto;
  padding-top: 68px;

  @media (max-width: 480px) {
    padding-right: 20px;
    padding-left: 20px;
  }

  @media (min-width: 481px) and (max-width: 740px) {
    padding-right: 24px;
    padding-left: 24px;
  }

  @media (min-width: 741px) and (max-width: 768px) {
    padding-right: 24px;
    padding-left: 24px;
  }

  @media (min-width: 769px) and (max-width: 1280px) {
  }
`;

export const ToContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  width: 100%;
  max-width: 720px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 4px;
  max-width: 720px;
`;

export const Title = styled.div`
  font: ${theme.font.H2Bold};
  color: ${theme.color.Grayscale900};
  margin-top: 10px;
`;

export const SubTitle = styled.div`
  font: ${theme.font.H5Regular};
  color: ${theme.color.Grayscale500};
`;

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`;

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 244px;
  height: 40px;
  border-radius: 8px;
  background: ${theme.color.Grayscale200};
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

export const BoxContainer = styled.div`
  width: 720px;

  @media (max-width: 480px) {
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 740px) {
    width: 100%;
  }

  @media (min-width: 741px) and (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1280px) {
    width: 720px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 24px;
    /* position: fixed; */
    bottom: 20px;
  }
`;
