import styled, { keyframes } from "styled-components";
import theme from "../../../styles/theme";

const GradientWave = keyframes`
  from {
    background-position-x:200%;
    
  }
  to {
    background-position-x: -200%;
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Onecircle = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 100px;
  animation: ${GradientWave} 1.7s linear infinite;
  background: linear-gradient(
    to right,
    ${theme.color.Grayscale200} 25%,
    ${theme.color.Grayscale100} 50%,
    ${theme.color.Grayscale200} 75%
  );
  background-size: 200% 100%;
`;

export const CircleContainer = styled.div`
  width: 100%;
`;

export const Circles = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const Circle = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  animation: ${GradientWave} 1.7s linear infinite;
  background: linear-gradient(
    to right,
    ${theme.color.Grayscale200} 25%,
    ${theme.color.Grayscale100} 50%,
    ${theme.color.Grayscale200} 75%
  );
  background-size: 200% 100%;
`;
