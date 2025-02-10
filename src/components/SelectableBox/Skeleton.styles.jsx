import styled from "styled-components";

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
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  background-color: #e0e0e0; /* 회색 배경 */
  animation: pulse 1.5s infinite alternate;

  @keyframes pulse {
    from {
      opacity: 0.6;
    }
    to {
      opacity: 1;
    }
  }
`;
