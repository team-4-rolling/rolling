import { styled } from "styled-components";
import theme from "../../styles/theme";

export const Card = styled.div`
  width: 394px;
  height: 280px;
  border-radius: 16px;
  background-color: ${theme.color.White};
  padding: 0 24px;
  box-shadow: 0 2px 12px rgb(0 0 0 / 8%);
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
`;

export const Badge = styled.div`
  width: 41px;
  height: 20px;
  color: black;
  background-color: yellow;
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

export const Content = styled.div`
  height: 84px;
  font-family: ${({ $font }) => `'${$font}', serif`};
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: ${theme.color.Grayscale600};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-align: left;
  overflow: hidden;
`;

export const Date = styled.div`
  font: ${theme.font.H8};
  color: ${theme.color.Grayscale400};
`;
