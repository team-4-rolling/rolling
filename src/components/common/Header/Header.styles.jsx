import styled from "styled-components";
import theme from "../../../styles/theme";
import { Link, NavLink } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  background-color: ${theme.color.White};
  border-bottom: 1px solid #ededed;
  position: sticky;
  top: 0;
  z-index: 200;

  @media (max-width: 480px) {
    display: ${({ $hide }) => ($hide ? "none" : "flex")};
  }
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

export const CreateRollingBtn = styled(NavLink)`
  width: 157px;

  @media (max-width: 480px) {
    width: 142px;
  }
`;
