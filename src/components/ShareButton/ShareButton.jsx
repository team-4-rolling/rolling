import { useEffect } from "react";
import Button from "../common/Button/Button";
import share from "../../assets/icons/share.svg";
import styled from "styled-components";
import theme from "../../styles/theme";
import { showToast } from "../../components/common/Toast/Toast";
import { useAutoClose } from "../../hooks/useAutoClose";

const JAVASCRIPT_KEY = import.meta.env.VITE_APP_JAVASCRIPT_KEY;
const TEMPLATE_ID = 117124;

export default function ShareButton() {
  const { ref, isOpen, setIsOpen } = useAutoClose(false);
  // 드롭다운 토글 함수
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // 카카오 SDK 초기화
  useEffect(() => {
    const initializeKakao = () => {
      if (window.Kakao) {
        if (!Kakao.isInitialized()) {
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

  // 카카오톡 공유 함수
  const shareKakao = () => {
    if (!window.Kakao || !window.Kakao.Share) {
      return;
    }

    window.Kakao.Share.sendCustom({
      templateId: TEMPLATE_ID,
    });
    setIsOpen(false); // 공유 후 드롭다운 닫기
  };

  // URL 복사 함수
  const copyURL = () => {
    const url = window.location.href; //현재 페이지 URL 가져오기
    const textArea = document.createElement("textarea"); // 동적 textarea 생성
    textArea.value = url;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy"); //execCommand를 사용한 복사
    document.body.removeChild(textArea);

    showToast(`URL이 복사되었습니다!`, "success", "top");
    setIsOpen(false);
  };

  return (
    <DropdownContainer ref={ref}>
      {/* 공유하기 버튼 */}
      <Button outlineSmall style={{ width: "100%" }} onClick={toggleDropdown}>
        <img src={share} alt="공유하기" />
      </Button>

      {/* 드롭다운 메뉴 */}
      {isOpen && ( //isDropdownOpen이 true일 때만 드롭다운 메뉴가 표시됨.
        <DropdownMenu>
          <DropdownItem $font={`${theme.font.H4Regular}`} onClick={shareKakao}>
            카카오톡 공유
          </DropdownItem>
          <DropdownItem $font={`${theme.font.H4Regular}`} onClick={copyURL}>
            URL 공유
          </DropdownItem>
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
}

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 56px;
  img {
    width: 24px;
    height: 24px;

    @media (max-width: 480px) {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 767px) {
    width: 36px;
  }
`;

const DropdownMenu = styled.div`
  width: 140px;
  height: 120px;
  position: absolute;
  top: 40px;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px 0;
  z-index: 100;
`;

const DropdownItem = styled.div`
  width: 100%;
  height: 50px;
  padding: 15px;
  cursor: pointer;
  font: ${theme.font.H4Regular};
  color: ${theme.color.Grayscale900};

  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: ${theme.color.Grayscale100};
  }
`;
