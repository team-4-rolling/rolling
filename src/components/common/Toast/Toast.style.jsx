import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import theme from "../../../styles/theme";

// 원인 분석
// 1. 잘될 때: 모바일 버전일 때 기준이 되는 부모 width (100vw)가 있었다 -> 자식 태그에 90% -> 잘 먹힌다.
// 2. 안될 때: 부모 태그에 width가 없으니, 자식 태그에 90%를 걸어도 -> 뭘 기준으로 90%야?? fit-content -> 자기 내부 사이즈에 맞게 너비를 설정한다.

// 해결방법
// 모바일 버전은 신경 쓸 필요 X
// 기준 너비

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    display: flex;
    width: 90%;
    /* min-width: 280px; */
    height: 64px;
    align-items: center;
    gap: 12px;
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: none;

    @media (min-width: 769px) and (max-width: 1280px) {
      /* width: 90%; */
      /* max-width: 524px; */
      /* min-width: 280px; */
      height: 56px;
      padding: 10px 16px;
    }

    @media (min-width: 481px) and(max-width: 768px) {
      /* width: 90%; */
      /* max-width: 524px; */
      /* min-width: 280px; */
      height: 50px;
      padding: 8px 12px;
      font-size: 14px;
    }

    @media (max-width: 480px) {
      width: 90%;
      /* max-width: 524px; */
      /* min-width: 280px; */
      height: 50px;
      padding: 8px 12px;
      font-size: 14px;
    }
  }

  .Toastify__toast-container--top-center {
    top: 16px;
  }

  .toast-success {
    background-color: black;
    color: white;
  }

  .toast-error {
    background-color: black;
    color: white;
  }
`;

export const ToastWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
`;

export const ToastText = styled.span`
  font: ${theme.font.H5Regular};
  color: white;

  @media (max-width: 480px) {
    font: ${theme.font.H7Regular};
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 20px;

  img {
    width: 24px;
    height: 24px;

    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`;
