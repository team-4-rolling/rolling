import styled from "styled-components";
import theme from "../../../styles/theme";

export const Username = styled.header`
  width: 100%;
  height: 52px;
  display: none;
  padding: 12px 20px;
  border-bottom: 1px solid #ededed;
  background-color: ${theme.color.White};
  font: ${theme.font.H4Bold};
  color: ${theme.color.Grayscale800};
  position: sticky;
  top: 0;
  @media (max-width: 480px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const Container = styled.header`
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 24px;
  border-bottom: 1px solid #ededed;
  background-color: ${theme.color.White};
  position: sticky;
  top: 65px;
  @media (max-width: 480px) {
    height: 52px;
    top: 52px;
  }
`;

export const Header = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const ToUser = styled.div`
  font: ${theme.font.H1};
  color: ${theme.color.Grayscale800};
  @media (max-width: 480px) {
    display: none;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font: ${theme.font.H3Bold};
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrittenContainer = styled.div`
  width: 100%;
  display: flex;
  padding-right: 28px;
  margin-right: 28px;
  gap: 11px;
  border-right: 1px solid #eeeeee;
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 769px) and (max-width: 1280px) {
    padding-right: 14px;
    margin: 0;
  }
`;

export const Written = styled.div`
  font: ${theme.font.H4Regular};
  color: ${theme.color.Grayscale900};

  span {
    font: ${theme.font.H4Bold};
  }
  @media (min-width: 769px) and (max-width: 1280px) {
    display: none;
  }
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
  @media (max-width: 767px) {
    gap: 10px;
  }
`;

export const Icons = styled.div`
  width: 246px;
  height: 36px;
  background-color: #eeeeee;

  @media (max-width: 767px) {
    width: 215px;
  }
`;

export const Share = styled.div`
  width: 56px;

  @media (max-width: 767px) {
    width: 36px;
  }
`;
