import * as S from "./Modal.styles";
import { createPortal } from "react-dom";
import Button from "../Button/Button";
import Badge from "../../Badge/Badge";
import cat from "../../../assets/icons/cat.jpeg";

export default function RollingPaperModal({ isOpen, onClose, children }) {
  if (!isOpen) return null; // 모달이 열리지 않은 상태라면 렌더링하지 않음

  return createPortal(
    <>
      <S.Overlay onClick={onClose} />
      <S.ModalBox>
        <S.FromContainer>
          <S.From>
            {children.profileImageURL && (
              <S.UserImg src={children.profileImageURL} />
            )}
            {children.sender && (
              <S.UserInfo>
                <S.UserName>
                  <span>From.</span>
                  {children.sender}
                </S.UserName>
                {children.relationship && (
                  <Badge relationship={children.relationship} />
                )}
              </S.UserInfo>
            )}
            {children.createdAt && <S.Date>{children.createdAt}</S.Date>}
          </S.From>
        </S.FromContainer>
        <S.Letter>
          {children.content && (
            <S.Content $font={children.font}>{children.content}</S.Content>
          )}
          <S.ButtonContainer>
            <Button onClick={onClose}>확인</Button>
          </S.ButtonContainer>
        </S.Letter>
      </S.ModalBox>
    </>,
    document.body
  );
}
