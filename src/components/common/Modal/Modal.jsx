import * as S from "./Modal.styles";
import * as C from "../../../constants/messageConstants";
import { createPortal } from "react-dom";
import Button from "../Button/Button";
import { useLockScroll } from "../../../hooks/useLockScroll";

export default function Modal({
  isOpen,
  onClose,
  children,
  buttonFunction,
  buttonName,
}) {
  useLockScroll(isOpen); // 모달이 열리면 스크롤 방지

  if (!isOpen) return null;

  const confirmButton = () => {
    buttonFunction();
    onClose();
  };

  return createPortal(
    <>
      <S.Overlay onClick={onClose} />
      <S.ModalBox>
        {children}
        <S.ButtonContainer>
          <Button onClick={onClose}>
            {buttonFunction
              ? `${C.BUTTON_LABELS.CANCEL}`
              : `${C.BUTTON_LABELS.CONFIRM}`}
          </Button>
          {buttonFunction && (
            <Button onClick={confirmButton}>{buttonName}</Button>
          )}
        </S.ButtonContainer>
      </S.ModalBox>
    </>,
    document.body
  );
}
