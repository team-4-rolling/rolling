import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  padding: 10px;
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 10px 16px;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 40px auto 0 auto;

  @media (max-width: 1024px) {
    width: 100%;
    align-items: flex-start;
  }

  @media (max-width: 600px) {
    width: 100%;
    align-items: flex-start;
  }
`;

export const Title = styled.h1`
  font: ${theme.font.H2Bold};
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font: ${theme.font.H2Bold};
    text-align: left;
    margin-bottom: 16px;
  }

  @media (max-width: 600px) {
    font: ${theme.font.H4Bold};
    text-align: left;
    margin-bottom: 12px;
  }
`;

export const LoadingMessage = styled.p`
  font: ${theme.font.H7Regular};
  color: ${theme.color.gray700};
  text-align: center;
`;

export const ButtonContainer = styled.div`
  margin-top: 80px;
  width: 280px;

  @media (max-width: 1024px) {
    bottom: 20px;
    position: fixed;
    width: 100%;
    padding: 0 16px;
  }
`;
