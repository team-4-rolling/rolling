import styled, { css } from "styled-components";

function Button({ children, type = "button", ...props }) {
  const { medium, outlineMedium, outlinesmall, large, outline, ...restProps } = props;
  return (
    <StyledButton
      $medium={medium}
      $outlineMedium={outlineMedium}
      $outlinesmall={outlinesmall}
      $large={large}
      $outline={outline}
      {...restProps}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width ? width : "120px")};
  height: ${({ height }) => (height ? height : "40px")};
  font: ${({ $font }) => $font};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.Purple600};
  border: none;
  color: ${({ theme }) => theme.color.White};
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
    props.$outlinesmall &&
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
      border: 1px solid ${({ theme }) => theme.color.Purple600};
      color: ${({ theme }) => theme.color.Purple700};
      background: ${({ theme }) => theme.color.white};
      color: ${({ theme }) => theme.color.White};
      border-radius: 12px;
    `}

    ${(props) =>
    props.$large &&
    css`
      font: ${({ $font }) => $font};
      width: ${({ width }) => (width ? width : "720px")};
      height: ${({ height }) => (height ? height : "56px")};
      border: 1px solid ${({ theme }) => theme.color.Purple600};
      color: ${({ theme }) => theme.color.Purple700};
      background: ${({ theme }) => theme.color.white};
      color: ${({ theme }) => theme.color.White};
      border-radius: 12px;
    `}
`;

export default Button;
