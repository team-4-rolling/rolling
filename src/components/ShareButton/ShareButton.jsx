import * as S from "./ShareButton.styles";
import { useEffect } from "react";
import Button from "../common/Button/Button";
import share from "../../assets/icons/share.svg";
import theme from "../../styles/theme";
import { showToast } from "../../components/common/Toast/Toast";
import { useAutoClose } from "../../hooks/useAutoClose";

const JAVASCRIPT_KEY = import.meta.env.VITE_APP_JAVASCRIPT_KEY;
const TEMPLATE_ID = 117124;

export default function ShareButton() {
  const { ref, isOpen, setIsOpen } = useAutoClose(false);
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // 카카오 SDK 초기화
  useEffect(() => {
    const initializeKakao = () => {
      if (window.Kakao) {
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init(JAVASCRIPT_KEY);
        }
      }
    };

    if (document.readyState === "complete") {
      initializeKakao();
    } else {
      window.addEventListener("load", initializeKakao);
      return () => window.removeEventListener("load", initializeKakao);
    }
  }, []);

  const shareKakao = () => {
    if (!window.Kakao || !window.Kakao.Share) {
      return;
    }

    window.Kakao.Share.sendCustom({
      templateId: TEMPLATE_ID,
    });
    setIsOpen(false);
  };

  // URL 복사 함수
  const copyURL = () => {
    const url = window.location.href;
    const textArea = document.createElement("textarea");
    textArea.value = url;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    showToast(`URL이 복사되었습니다!`, "success", "top");
    setIsOpen(false);
  };

  return (
    <S.DropdownContainer ref={ref}>
      {/* 공유하기 버튼 */}
      <Button outlineSmall style={{ width: "100%" }} onClick={toggleDropdown}>
        <img src={share} alt="공유하기" />
      </Button>

      {/* 드롭다운 메뉴 */}
      {isOpen && (
        <S.DropdownMenu>
          <S.DropdownItem
            $font={`${theme.font.H4Regular}`}
            onClick={shareKakao}
          >
            카카오톡 공유
          </S.DropdownItem>
          <S.DropdownItem $font={`${theme.font.H4Regular}`} onClick={copyURL}>
            URL 공유
          </S.DropdownItem>
        </S.DropdownMenu>
      )}
    </S.DropdownContainer>
  );
}
