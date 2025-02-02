import styled from "styled-components";
import theme from "../../styles/theme";
import { NavLink } from "react-router-dom";

export const Div = styled.div`
  /* width: 100%; */
  /* height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 24px;
  gap: 50px;

  @media (max-width: 480px) {
    padding: 24px;
    gap: 40px;
  }
  @media (max-width: 1019px) {
    padding: 24px;
    gap: 40px;
  }
  @media (min-width: 1020px) and (max-width: 1248px) {
    padding: 60px 24px;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Card = styled.div`
  width: 1200px;
  min-width: 320px;
  height: 324px;
  display: flex;
  flex-direction: ${({ $id }) => ($id === 2 ? "row-reverse" : "row")};
  justify-content: space-evenly;
  align-items: center;
  padding: 24px;
  border-radius: 16px;
  background-color: ${theme.color.Surface};
  overflow: hidden;

  @media (max-width: 600px) {
    width: 100%;
    height: 380px;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    border-radius: 20px;
  }
  @media (min-width: 601px) and (max-width: 1019px) {
    width: 100%;
    height: 420px;
    flex-direction: column;
    justify-content: center;
    gap: 36px;
  }
  @media (min-width: 1020px) and (max-width: 1248px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

export const Point = styled.div`
  width: 80px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  border-radius: 50px;
  font: ${theme.font.H7Bold};
  color: ${theme.color.White};
  background-color: ${theme.color.Purple600};

  @media (max-width: 600px) {
    height: 28px;
  }
`;

export const Title = styled.h2`
  white-space: pre-line;
  font: ${theme.font.H2Bold};
  color: ${theme.color.Grayscale900};

  @media (max-width: 600px) {
    font: ${theme.font.H4Bold};
  }
  @media (min-width: 601px) and (max-width: 1019px) {
    white-space: nowrap;
  }
`;

export const SubTitle = styled.h3`
  font: ${theme.font.H4Regular};
  color: ${theme.color.Grayscale500};

  @media (max-width: 600px) {
    font: ${theme.font.H6Regular};
  }
`;

export const ImgContainer = styled.div`
  width: 640px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    width: 470px;
  }
`;

export const Img = styled.img`
  width: ${({ $id }) => ($id === 1 ? "640px" : "470px")};
  height: ${({ $id }) => ($id === 1 ? "162px" : "204px")};

  @media (max-width: 600px) {
    width: ${({ $id }) => ($id === 1 ? "355px" : "260px")};
    height: ${({ $id }) => ($id === 1 ? "90px" : "113px")};
  }
`;

export const LookingBtn = styled(NavLink)`
  width: 280px;

  @media (max-width: 1019px) {
    width: 100%;
  }
`;
