import React from "react";
import { createRoot } from "react-dom/client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import closeIcon from "../../../assets/icons/close.svg";
import {
  StyledToastContainer,
  ToastWrapper,
  ToastText,
  CloseButton,
  CustomCloseButton,
} from "./Toast.style";

const ensureToastContainer = () => {
  if (!document.getElementById("toast-root")) {
    const toastRoot = document.createElement("div");
    toastRoot.id = "toast-root";
    document.body.appendChild(toastRoot);
    const root = createRoot(toastRoot);
    root.render(<StyledToastContainer />);
  }
};

const ToastContent = ({ message, closeToast }) => (
  <ToastWrapper>
    <ToastText>{message}</ToastText>
    <CloseButton onClick={closeToast}>
      <img src={closeIcon} alt="닫기 아이콘" />
    </CloseButton>
  </ToastWrapper>
);

/**
 * ✅
 * @param {string} message -
 * @param {("success" | "error")} type
 */
const showToast = (message, type = "success") => {
  ensureToastContainer();
  toast[type](<ToastContent message={message} />, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
    closeButton: ({ closeToast }) => (
      <CustomCloseButton onClick={closeToast}>
        <img src={closeIcon} alt="닫기 아이콘" />
      </CustomCloseButton>
    ),
    className: `toast-${type}`,
  });
};

const copyToClipboard = async (url) => {
  try {
    await navigator.clipboard.writeText(url);
    showToast(`"${url}"이(가) 성공적으로 복사되었습니다!`, "success");
  } catch (error) {
    showToast("URL 복사에 실패했습니다. 다시 시도해주세요.", "error");
  }
};

export { showToast, copyToClipboard };
