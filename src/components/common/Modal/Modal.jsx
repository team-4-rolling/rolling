import * as S from "./Modal.styles";
import { createPortal } from "react-dom";
import Button from "../Button/Button";

export default function Modal({
  isOpen,
  onClose,
  children,
  buttonFunction,
  buttonName,
}) {
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
          <Button onClick={onClose}>{buttonFunction ? "취소" : "확인"}</Button>
          {buttonFunction && (
            <Button onClick={confirmButton}>{buttonName}</Button>
          )}
        </S.ButtonContainer>
      </S.ModalBox>
    </>,
    document.body
  );
}
