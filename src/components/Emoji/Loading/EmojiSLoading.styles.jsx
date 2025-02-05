import styled, { keyframes } from "styled-components";

const loading = keyframes`
 0% { transform: translateY(0); }
  10% { transform: translateY(-10px); }
  20% { transform: translateY(0); }
  100% { transform: translateY(0); }
`;

export const Loading = styled.div`
  width: 150px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

export const LoadingEmoji = styled.div`
  font-size: 30px;
  animation: ${loading} 1.6s ease-in-out infinite;

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.4s;
  }
  &:nth-child(3) {
    animation-delay: 0.8s;
  }
`;
