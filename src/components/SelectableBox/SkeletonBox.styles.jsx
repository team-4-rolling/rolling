import styled from "styled-components";
import { GradientWave } from "../Skeleton/Skeleton.style";
import theme from "../../styles/theme";

export const Grid = styled.div`
  display: grid;
  width: 100%;
  max-width: 720px;
  height: auto;
  gap: 16px;
  margin-top: 10px;
  margin-bottom: 40px;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;

  @media (max-width: 765px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SkeletonBox = styled.div`
  animation: ${GradientWave} 1.7s linear infinite;
  background: linear-gradient(
    to right,
    ${theme.color.Grayscale200} 25%,
    ${theme.color.Grayscale100} 50%,
    ${theme.color.Grayscale200} 75%
  );
  background-size: 200% 100%;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
`;
