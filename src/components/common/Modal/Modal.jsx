import * as S from "./Modal.styles";
import { createPortal } from "react-dom";
import Button from "../Button/Button";

export default function RollingPaperModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <>
      <S.Overlay onClick={onClose} />
      <S.ModalBox>
        {children}
        <S.ButtonContainer>
          <Button onClick={onClose}>확인</Button>
        </S.ButtonContainer>
      </S.ModalBox>
    </>,
    document.body
  );
}
