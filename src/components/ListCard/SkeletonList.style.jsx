import styled, { keyframes } from "styled-components";
import { Card } from "./Listcard.style";

// ✨ 스켈레톤 애니메이션
export const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

// ✨ 공통 스켈레톤 스타일
export const SkeletonBox = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 400% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 12px;
`;

// ✨ Swiper와 맞춘 스켈레톤 리스트 컨테이너
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

// ✨ 카드 스켈레톤
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

// ✨ 제목 자리
export const SkeletonTitle = styled(SkeletonBox)`
  width: 60%;
  height: 20px;
  margin-top: 10px;
`;

// ✨ 프로필 자리
export const SkeletonProfile = styled(SkeletonBox)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

// ✨ 메시지 개수 자리
export const SkeletonMessageCount = styled(SkeletonBox)`
  width: 80%;
  height: 16px;
  margin-top: 6px;
`;

// ✨ 반응 자리
export const SkeletonReaction = styled(SkeletonBox)`
  width: 60px;
  height: 24px;
  border-radius: 12px;
`;
