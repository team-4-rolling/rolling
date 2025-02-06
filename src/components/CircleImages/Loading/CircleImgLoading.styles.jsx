import styled from "styled-components";
import { GradientWave } from "../../../pages/RollingPage/Skeleton/Skeleton.style";
import theme from "../../../styles/theme";

export const Loading = styled.div`
  width: 76px;
  height: 28px;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Circle = styled.div`
  width: 28px;
  height: 28px;
  position: absolute;
  right: ${({ $idx }) => `${$idx * 16}px`};
  border-radius: 140px;
  outline: 1.4px solid white;
  z-index: ${({ $idx }) => 10 - $idx};
  animation: ${GradientWave} 1.7s linear infinite;
  background: linear-gradient(
    to right,
    ${theme.color.Grayscale200} 25%,
    ${theme.color.Grayscale100} 50%,
    ${theme.color.Grayscale200} 75%
  );
  background-size: 200% 100%;
`;
