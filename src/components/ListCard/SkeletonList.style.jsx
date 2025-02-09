import styled, { keyframes } from "styled-components";
import { Card } from "./Listcard.style";

export const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

export const SkeletonBox = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 400% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 12px;
`;

export const SkeletonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: nowrap;
  overflow: hidden;

  @media (max-width: 1024px) {
    gap: 16px;
  }

  @media (max-width: 600px) {
    gap: 12px;
  }
`;

export const SkeletonCardBox = styled(Card)`
  background: #f0f0f0;
  pointer-events: none;
  flex: 0 0 auto;

  @media (min-width: 1025px) {
    width: 275px;
    height: 260px;
  }

  @media (max-width: 1024px) {
    width: 220px;
    height: 240px;
  }

  @media (max-width: 600px) {
    width: 180px;
    height: 220px;
  }
`;

export const SkeletonTitle = styled(SkeletonBox)`
  width: 60%;
  height: 20px;
  margin-top: 10px;
`;

export const SkeletonProfile = styled(SkeletonBox)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const SkeletonMessageCount = styled(SkeletonBox)`
  width: 80%;
  height: 16px;
  margin-top: 6px;
`;

export const SkeletonReaction = styled(SkeletonBox)`
  width: 60px;
  height: 24px;
  border-radius: 12px;
`;
