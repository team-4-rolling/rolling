import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  width: 720px;
  height: auto;
  gap: 16px;
  margin-top: 10px;
  margin-bottom: 40px;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 765px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 766px) and (max-width: 1280px) {
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Box = styled.div`
  aspect-ratio: 1 / 1;
  border-radius: 16px;
  background-color: ${({ $color }) => $color || "transparent"};
  background-image: ${({ $backgroundImage }) => $backgroundImage || "none"};
  background-size: cover;
  background-position: center;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 154px;

  &:hover {
    opacity: 0.8;
  }

  ${({ selected }) =>
    selected &&
    `
    opacity: 0.3;
  `}
`;

export const CheckIcon = styled.img`
  width: 44px;
  height: 44px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
