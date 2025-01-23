import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.white};
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

export const CreateBtn = styled(NavLink)`
  width: 157px;
  height: 40px;
  padding: 8px 16px;
  font: ${({ theme }) => theme.font.H5Bold};
  color: #181818;
  text-align: center;
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.Grayscale300};
  cursor: pointer;

  &:visited {
    color: ${({ theme }) => theme.color.Grayscale900};
  }
`;
