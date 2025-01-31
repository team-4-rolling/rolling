import styled from "styled-components";

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
