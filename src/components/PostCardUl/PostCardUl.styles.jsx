import styled from "styled-components";
import theme from "../../styles/theme";

export const Card = styled.div`
  width: 384px;
  min-width: 320px;
  height: 280px;
  border-radius: 16px;
  background-color: ${theme.color.White};
  padding: 0 24px;
  box-shadow: 0 2px 12px rgb(0 0 0 / 8%);

  @media (max-width: 480px) {
    width: 320px;
    height: 230px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    height: 230px;
  }
  @media (min-width: 769px) and (max-width: 1280px) {
    width: 100%;
    height: 284px;
  }
`;

export const FromContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.color.Grayscale200};
`;

export const From = styled.div`
  display: flex;
  gap: 14px;
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

export const Trash = styled.div`
  width: 40px;
  height: 40px;
  padding: 8px;
  background-color: ${theme.color.White};
  border: 1px solid ${theme.color.Grayscale300};
  border-radius: 6px;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const Letter = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px 0;
`;

export const Content = styled.p`
  height: 84px;
  font-family: ${({ $font }) => "${$font}"}; //serif
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: ${theme.color.Grayscale600};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-align: left;
  overflow: hidden;
  @media (max-width: 480px) {
    height: 44px;
    font-size: 15px;
    line-height: 22px;
    -webkit-line-clamp: 2;
  }
`;

export const Date = styled.div`
  font: ${theme.font.H8};
  color: ${theme.color.Grayscale400};
`;
