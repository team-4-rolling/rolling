import React from "react";
import styled, { css } from "styled-components";

function Button({
  width,
  height,
  font,
  children,
  onClick,
  disabled,
  className,
  type = "button",
  ...props
}) {
  return (
    <StyledButton
      width={width}
      height={height}
      font={font}
      onClick={onClick}
      disabled={disabled}
      className={className}
      type={type}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width ? width : "200px")};
  height: ${({ height }) => (height ? height : "56px")};
  font: ${({ font }) => font};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.Purple600};
  border: none;
  color: ${({ theme }) => theme.color.White};
  &:disabled {
    background: ${({ theme }) => theme.color.Grayscale300};
  }

  ${(props) =>
    props.outline &&
    css`
      border: 1px solid ${({ theme }) => theme.color.Grayscale300};
      color: ${({ theme }) => theme.color.Grayscale900};
      background: ${({ theme }) => theme.color.White};
      border-radius: 6px;
    `}

  ${(props) =>
    props.secondary &&
    css`
      width: ${(width) => (width ? width.width : "122px")};
      height: ${(height) => (height ? height.height : "40px")};
      padding: 7px 16px;
      border-radius: 6px;
      border: 1px solid ${({ theme }) => theme.color.Purple600};
      background: ${({ theme }) => theme.color.white};
      color: ${({ theme }) => theme.color.Purple700};
    `}
`;

export default Button;
