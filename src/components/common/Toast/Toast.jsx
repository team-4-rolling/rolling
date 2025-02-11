import { toast } from "react-toastify";
import closeIcon from "../../../assets/icons/close.svg";
import { ToastWrapper, ToastText, CloseButton } from "./Toast.style";

const ToastContent = ({ message, closeToast }) => (
  <ToastWrapper>
    <ToastText>{message}</ToastText>
    <CloseButton onClick={closeToast}>
      <img src={closeIcon} alt="닫기 아이콘" />
    </CloseButton>
  </ToastWrapper>
);

/**
 * @param {string} message
 * @param {("success" | "error")} type
 */
const showToast = (message, type = "success", position = "bottom") => {
  toast[type](<ToastContent message={message} />, {
    position: position === "top" ? "top-center" : "bottom-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
    closeButton: false,
    className: `toast-${type}`,
  });
};

export { showToast };
