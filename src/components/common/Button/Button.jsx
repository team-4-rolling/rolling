import React from "react";
import styled, { css } from "styled-components";

function Button({
  width,
  height,
  fontSize,
  fontWeight,
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
      fontSize={fontSize}
      fontWeight={fontWeight}
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
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 24px;
  width: ${(width) => (width ? width.width : "200px")};
  height: ${(height) => (height ? height.height : "56px")};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.Purple600};
  border: none;
  color: ${({ theme }) => theme.White};
  font-size: ${(fontSize) => (fontSize ? fontSize.fontSize : "18px")};
  font-weight: ${(fontWeight) => (fontWeight ? fontWeight.fontWeight : "700")};
  &:hover {
    background: ${({ theme }) => theme.color.Purple700};
  }
  &:focus {
    border: 2px solid ${({ theme }) => theme.color.Purple900};
    background: ${({ theme }) => theme.color.Purple600};
  }
  &:disabled {
    background: ${({ theme }) => theme.color.Grayscale300};
  }
  @media ${({ theme }) => theme.breakpoint.tablet} {
    width: 930px;
    position: fixed;
  }
  @media ${({ theme }) => theme.breakpoint.mobile} {
    width: 880px;
    position: fixed;
  }
  ${(props) =>
    props.outline &&
    css`
      border: 1px solid ${({ theme }) => theme.color.Grayscale300};
      color: ${({ theme }) => theme.color.Grayscale900};
      background: ${({ theme }) => theme.color.White};

      &:hover {
        background: ${({ theme }) => theme.color.Grayscale100};
        border: 1px solid ${({ theme }) => theme.color.Grayscale300};
      }
      &:focus {
        background: ${({ theme }) => theme.color.White};
        border: 1px solid ${({ theme }) => theme.color.Grayscale500};
      }
      @media ${({ theme }) => theme.breakpoint.tablet} {
        width: 120px;
        height: 36px;
      }
      @media ${({ theme }) => theme.breakpoint.mobile} {
        width: 120px;
        height: 28px;
      }
    `}
  ${(props) =>
    props.secondary &&
    css`
      width: ${(width) => (width ? width.width : "122px")};
      height: ${(height) => (height ? height.height : "40px")};
      padding: 7px 16px;
      border-radius: 6px;
      border: 1px solid ${({ theme }) => theme.color.Purple600};
      background: ${({ theme }) => theme.color.White};
      color: ${({ theme }) => theme.color.Purple700};
      font-size: ${(fontSize) => (fontSize ? fontSize.fontSize : "16px")};
      font-weight: ${(fontWeight) =>
        fontWeight ? fontWeight.fontWeight : "400"};

      &:hover {
        background: ${({ theme }) => theme.color.Purple100};
      }
      &:focus {
        border: 1px solid ${({ theme }) => theme.color.Purple800};
        background: ${({ theme }) => theme.color.White};
      }
    `}
`;

export default Button;
