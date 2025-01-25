import styled from "styled-components";
import theme from "../../styles/theme";

export const Div = styled.div`
  width: 100%;
  height: calc(100vh - 65px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div``;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Card = styled.div`
  width: 1200px;
  height: 324px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 16px;
  background-color: ${theme.color.Purple100};
  flex-direction: ${({ $id }) => ($id === 2 ? "row-reverse" : "row")};
`;

export const Content = styled.div`
  height: 156px;
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
`;

export const Title = styled.div`
  white-space: pre-line;
  font: ${theme.font.H2Bold};
  color: ${theme.color.Grayscale900};
`;

export const SubTitle = styled.div`
  font: ${theme.font.H4Regular};
  color: ${theme.color.Grayscale500};
`;

export const Img = styled.img`
  width: ${({ $id }) => ($id === 1 ? "640px" : "470px")};
  height: ${({ $id }) => ($id === 1 ? "162px" : "204px")};
`;
