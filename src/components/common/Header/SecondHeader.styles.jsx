import styled from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.header`
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ededed;
  background-color: ${theme.color.White};
  position: sticky;
  top: 65px;
`;

export const Header = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ToUser = styled.div`
  font: ${theme.font.H1};
  color: ${theme.color.Grayscale800};
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
`;

export const WrittenContainer = styled.div`
  display: flex;
  gap: 11px;
`;

export const Written = styled.div`
  font: ${theme.font.H4Regular};
  color: ${theme.color.Grayscale900};

  span {
    font: ${theme.font.H4Bold};
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icons = styled.div`
  width: 246px;
  height: 36px;
  background-color: #eeeeee;
  margin-right: 8px;
`;

export const Btns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
  img {
    width: 24px;
    height: 24px;
  }
`;
