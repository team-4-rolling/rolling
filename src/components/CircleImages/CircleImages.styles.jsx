import styled from "styled-components";

export const Container = styled.div`
  width: 76px;
  height: 28px;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Image = styled.img`
  width: 28px;
  height: 28px;
  position: absolute;
  right: ${({ $idx }) => `${$idx * 16}px`};
  border-radius: 140px;
  outline: 1.4px solid white;
  z-index: ${({ $idx }) => 10 - $idx};
`;

export const Count = styled.div`
  width: 28px;
  height: 28px;
  justify-content: center;
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  color: #484848;
  background-color: white;
  border-radius: 140px;
  outline: 1px solid #e3e3e3;
  z-index: 10;
`;
