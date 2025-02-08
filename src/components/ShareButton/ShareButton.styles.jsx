import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 56px;
  img {
    width: 24px;
    height: 24px;

    @media (max-width: 480px) {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 767px) {
    width: 36px;
  }
`;

export const DropdownMenu = styled.div`
  width: 140px;
  height: 120px;
  position: absolute;
  top: 40px;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px 0;
  z-index: 100;
`;

export const DropdownItem = styled.div`
  width: 100%;
  height: 50px;
  padding: 15px;
  cursor: pointer;
  font: ${theme.font.H4Regular};
  color: ${theme.color.Grayscale900};

  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: ${theme.color.Grayscale100};
  }
`;
