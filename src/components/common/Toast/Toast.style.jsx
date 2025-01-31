import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const StyledToastContainer = styled(ToastContainer).attrs({
  className: "custom-toast-container",
})`
  .Toastify__toast {
    display: flex;
    width: 524px;
    height: 64px;
    align-items: center;
    gap: 12px;
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: none;
  }

  .toast-success {
    background-color: black !important;
    color: white;
  }

  .toast-error {
    background-color: black !important;
    color: white;
  }

  .Toastify__toast-body {
    margin: 0;
    padding: 0;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .Toastify__close-button {
    display: block !important;
  }
`;

export const ToastWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 12px;
`;

export const ToastText = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: white;
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
  }
`;

export const CustomCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
  }
`;
