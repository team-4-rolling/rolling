import React from "react";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import closeIcon from "../../../assets/icons/close.svg";
import checkIcon from "../../../assets/icons/check.svg";

const ToastContent = ({ message, closeToast }) => (
  <ToastWrapper>
    <CheckIcon src={checkIcon} alt="체크 아이콘" />
    <ToastText>{message}</ToastText>
    <CloseButton onClick={closeToast}>
      <img src={closeIcon} alt="닫기 아이콘" />
    </CloseButton>
  </ToastWrapper>
);

const showToast = (message) => {
  toast(<ToastContent message={message} />, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
  });
};

const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    display: flex;
    width: 524px;
    height: 64px;
    align-items: center;
    gap: 12px;
    background: black;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: none;
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
    display: none;
  }
`;

const ToastWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 12px;
`;

const CheckIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const ToastText = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: white;
`;

const CloseButton = styled.button`
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

const ToastComponent = () => {
  return <StyledToastContainer />;
};

export { showToast, ToastComponent };
