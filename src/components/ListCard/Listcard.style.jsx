import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const SwiperButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 100;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const PrevButton = styled(SwiperButton)`
  left: -30px;
`;

export const NextButton = styled(SwiperButton)`
  right: -20px;
`;

export const Slide = styled.div`
  flex: 0 0 auto;
  width: 275px;
  height: 260px;
  margin-right: 10px;
  width: auto;

  @media (max-width: 1024px) {
    width: 275px;
    height: 260px;
    margin-right: 8px;
    width: auto;
  }

  @media (max-width: 640px) {
    min-width: 208px;
    height: 232px;
    margin-right: 6px;
    width: 100%;
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: ${({ $backgroundImage, $backgroundColor }) =>
    $backgroundImage
      ? `url(${$backgroundImage}) center/cover`
      : $backgroundColor || "#f0f0f0"};
  color: ${({ $backgroundImage }) => ($backgroundImage ? "#fff" : "#000")};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px 20px;
  position: relative;
  overflow: hidden;
  text-align: left;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  z-index: 99;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    padding: 20px;
  }

  @media (max-width: 600px) {
    padding: 16px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.15);
`;

export const Title = styled.h3`
  margin-top: 10px;
  font: ${theme.font.H2Bold};
  z-index: 1;
`;

export const ProfileContainer = styled.div`
  display: flex;
  margin-top: 8px;
  z-index: 1;
`;

export const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: ${({ $first }) => ($first ? "0" : "-14px")};
  border: 2px solid white;
`;

export const MoreProfiles = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.White};
  color: ${({ theme }) => theme.color.Black};
  display: flex;
  align-items: center;
  justify-content: center;
  font: ${theme.font.H8};
  margin-left: -10px;
`;

export const MessageCount = styled.p`
  margin-top: 6px;
  font: ${theme.font.H5Regular};
  color: ${({ $whiteText }) =>
    $whiteText ? theme.color.White : theme.color.Grayscale900};
  z-index: 1;

  span {
    font: ${theme.font.H5bold};
  }
`;

export const Divider = styled.div`
  width: 90%;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  margin: 6px 0;
  position: relative;
  z-index: 1;
`;

export const ReactionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;
  z-index: 1;
`;

export const Reaction = styled.div`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.54);
  color: ${({ theme }) => theme.color.White};
  padding: 8px 12px;
  border-radius: 18px;
  font: ${theme.font.H5Regular};
  height: 36px;
  width: 67px;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 64px;
    height: 36px;
    font: ${theme.font.H7Regular};
    /* font-size: 14px;
    font: sans-serif; */
  }

  @media (max-width: 600px) {
    width: 60px;
    height: 32px;
    font: ${theme.font.H8};
  }
`;

export const NoReactions = styled.p`
  font: ${theme.font.H7Regular};
  color: ${({ $whiteText }) =>
    $whiteText ? theme.color.White : theme.color.Grayscale900};
  text-align: center;
  margin-bottom: 8px;
`;
