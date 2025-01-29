import styled from "styled-components";
import theme from "../../../styles/theme";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${theme.color.white};
`;

export const FirstHeader = styled.div`
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ededed;
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
