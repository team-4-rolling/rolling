import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width ? width : "120px")};
  height: ${({ height }) => (height ? height : "40px")};
  font: ${({ $font }) => $font};
  border-radius: 8px;
  border: none;
  color: ${({ theme }) => theme.color.White};
  background: ${({ theme }) => theme.color.Purple700};
  cursor: pointer;
  &:disabled {
    background: ${({ theme }) => theme.color.Grayscale300};
  }

  ${(props) =>
    props.$outline &&
    css`
      font: ${({ $font }) => $font};
      width: ${({ width }) => (width ? width : "157px")};
      height: ${({ height }) => (height ? height : "40px")};
      border: 1px solid ${({ theme }) => theme.color.Grayscale300};
      color: ${({ theme }) => theme.color.Grayscale900};
      background: ${({ theme }) => theme.color.White};
      border-radius: 6px;
    `}

  ${(props) =>
    props.$outlineMedium &&
    css`
      font: ${({ $font }) => $font};
      width: ${({ width }) => (width ? width : "88px")};
      height: ${({ height }) => (height ? height : "40px")};
      border: 1px solid ${({ theme }) => theme.color.Grayscale300};
      color: ${({ theme }) => theme.color.Grayscale900};
      background: ${({ theme }) => theme.color.White};
      border-radius: 6px;
    `}

  ${(props) =>
    props.$outlineSmall &&
    css`
      font: ${({ $font }) => $font};
      width: ${({ width }) => (width ? width : "56px")};
      height: ${({ height }) => (height ? height : "36px")};
      border: 1px solid ${({ theme }) => theme.color.Grayscale300};
      color: ${({ theme }) => theme.color.Grayscale900};
      background: ${({ theme }) => theme.color.White};
      border-radius: 6px;
    `}

  ${(props) =>
    props.$medium &&
    css`
      font: ${({ $font }) => $font};
      width: ${({ width }) => (width ? width : "280px")};
      height: ${({ height }) => (height ? height : "56px")};
      color: ${({ theme }) => theme.color.White};
      background: ${({ theme }) => theme.color.Purple700};
      border-radius: 12px;
    `}

    ${(props) =>
    props.$large &&
    css`
      font: ${({ $font }) => $font};
      width: ${({ width }) => (width ? width : "720px")};
      height: ${({ height }) => (height ? height : "56px")};
      color: ${({ theme }) => theme.color.White};
      background: ${({ theme }) => theme.color.Purple700};
      border-radius: 12px;
    `}
`;

export default StyledButton;
