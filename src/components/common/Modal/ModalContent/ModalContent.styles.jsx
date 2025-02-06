import styled from "styled-components";
import theme from "../../../../styles/theme";

export const Card = styled.div`
  width: 520px;
  height: 376px;
  border-radius: 16px;
  background-color: ${theme.color.White};

  @media (min-width: 481px) and (max-width: 768px) {
    min-width: 350px;
    width: 100%;
    height: 250px;
  }
`;

export const FromContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.color.Grayscale200};
  @media (min-width: 481px) and (max-width: 768px) {
    height: 80px;
  }
`;

export const From = styled.div`
  display: flex;
  gap: 16px;
`;

export const UserImg = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 100px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const UserName = styled.div`
  font: ${theme.font.H3Bold};

  span {
    font: ${theme.font.H3Regular};
    margin-right: 6px;
  }
  @media (max-width: 480px) {
    font: ${theme.font.H5Bold};
    span {
      font: ${theme.font.H5Regular};
    }
  }
`;

export const Letter = styled.div`
  width: 100%;
  height: 256px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px 0;
  overflow: scroll;
  padding-bottom: 50px;

  @media (min-width: 481px) and (max-width: 768px) {
    height: 160px;
    padding: 15px 0;
  }
`;

export const Content = styled.p`
  height: 84px;
  font-family: ${({ $font }) => `'${$font}', serif`};
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: ${theme.color.Grayscale600};
  text-align: left;
`;

export const Date = styled.div`
  font: ${theme.font.H8};
  color: ${theme.color.Grayscale400};
`;
