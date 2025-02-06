import theme from "../../../styles/theme";
import styled, { keyframes } from "styled-components";

export const GradientWave = keyframes`
  from {
    background-position-x:200%;

  }
  to {
    background-position-x: -200%;
  }
`;

export const SkeletonBox = styled.div`
  background-color: ${theme.color.White};
  border-radius: 16px;
  width: 100%;
  height: 284px;
  margin-bottom: 8px;
  box-shadow: 0 2px 12px rgb(0 0 0 / 8%);
  padding: 0 24px;

  @media (max-width: 480px) {
    min-width: 320px;
    height: 230px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    min-width: 320px;
  }
  @media (min-width: 769px) and (max-width: 1280px) {
    min-width: 352px;
  }
`;

export const SkeletonUserFlex = styled.div`
  display: flex;
  padding: 20px 0px;
  flex-direction: column;
  gap: 35px;
`;

export const SkeletonProfile = styled.div`
  animation: ${GradientWave} 1.7s linear infinite;
  background: linear-gradient(
    to right,
    ${theme.color.Grayscale200} 25%,
    ${theme.color.Grayscale100} 50%,
    ${theme.color.Grayscale200} 75%
  );
  background-size: 200% 100%;
  width: 56px;
  height: 56px;
  border-radius: 100px;
`;

export const SkeletonContent = styled.div`
  animation: ${GradientWave} 1.7s linear infinite;
  width: 100%;
  background: linear-gradient(
    to right,
    ${theme.color.Grayscale200} 25%,
    ${theme.color.Grayscale100} 50%,
    ${theme.color.Grayscale200} 75%
  );
  background-size: 200% 100%;
  height: 100px;
  @media (max-width: 480px) {
    height: 44px;
  }
`;
