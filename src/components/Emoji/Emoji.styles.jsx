import styled from "styled-components";
import theme from "../../styles/theme";

export const NoneEmoji = styled.div`
  width: 200px;
  font: ${theme.font.H4Regular};
`;

export const Icons = styled.div`
  width: 246px;
  height: 36px;
  background-color: #eeeeee;

  @media (max-width: 767px) {
    width: 215px;
  }
`;

export const Emoji = styled.div`
  width: 88px;
  position: relative;

  img {
    width: 24px;
    height: 24px;
    @media (max-width: 480px) {
      width: 20px;
      height: 20px;
    }
  }
  span {
    margin-left: 4px;
    @media (max-width: 767px) {
      display: none;
    }
  }

  @media (max-width: 767px) {
    width: 36px;
  }
`;

export const StyledEmoji = styled.div`
  width: 300px;
  height: 400px;
  position: absolute;
  top: 120%;
  right: 0;

  @media (max-width: 480px) {
    width: 270px;
    right: -20px;
  }
`;
