import styled from "styled-components";
import theme from "../../../styles/theme";
import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.White};
  border-bottom: 1px solid #ededed;
  position: sticky;
  top: 0;
`;

export const Header = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  img {
    width: 28px;
    height: 28px;
  }

  h1 {
    color: #4a494f;
    font-family: "Poppins", serif;
    font-size: 20px;
    font-weight: 700;
    font-style: normal;
  }
`;
