import * as S from "./ToPage.styles";
import { useState, useEffect } from "react"; // 상태 관리 & 사이드 이펙트 (API 요청)
import axios from "axios";
import Button from "../../components/common/Button/Button";
import theme from "../../styles/theme";
import SelectableBox from "./SelectableBox";
import Input from "../../components/common/Input/Input";
import { getBackgroundImages } from "../../api/backgroundImages"; // API 함수 import

const COLORS = [
  { key: "beige", color: theme.color.Beige200 },
  { key: "purple", color: theme.color.Purple200 },
  { key: "blue", color: theme.color.Blue200 },
  { key: "green", color: theme.color.Green200 },
];

export default function ToPage() {
  const [mode, setMode] = useState("color"); // 현재 선택된 모드 ('color' 또는 'image')
  const [selected, setSelected] = useState("beige"); // 현재 선택된 배경(컬러 또는 이미지 URL)
  const [images, setImages] = useState([]); // API에서 불러온 이미지 리스트
  const [recipientName, setRecipientName] = useState(""); // 사용자가 입력한 받는 사람 이름

  // 모드가 'image'로 변경되었을 때 API에서 이미지 불러오기
  useEffect(() => {
    if (mode === "image") {
      axios
        .get("https://rolling-api.vercel.app/background-images/")
        .then((response) => {
          console.log("Fetched images:", response.data.imageUrls); // 디버깅
          setImages(response.data.imageUrls);
        })
        .catch((error) => console.error("Failed to fetch images:", error));
    }
  }, [mode]); // mode가 변경될 때만 실행됨

  // 토글 버튼 클릭 시 모드 변경 함수
  const handleModeChange = (newMode) => {
    setMode(newMode); // 모드 업데이트
    setSelected(newMode === "color" ? "beige" : null); // 컬러 모드에서는 기본값 'beige' 설정
  };

  // 컬러 또는 이미지 선택 시 실행되는 함수
  const handleSelect = (key) => {
    setSelected(key); // 선택한 컬러 키 또는 이미지 URL을 저장
  };

  // 생성하기 버튼 클릭 시 실행되는 함수 (POST 요청)
  const handleSubmit = async () => {
    if (!recipientName.trim()) {
      alert("받는 사람 이름을 입력해 주세요.");
      return;
    }

    const dataToSend = {
      recipientName, // 입력된 이름
      background: mode === "color" ? selected : selected || null, // 선택된 배경 (컬러 키 또는 이미지 URL)
    };

    try {
      const response = await axios.post(
        "https://rolling-api.vercel.app/13-4/recipients",
        dataToSend
      );
      if (response.status === 201) {
        alert("롤링페이퍼가 성공적으로 생성되었습니다!");
      } else {
        alert("롤링페이퍼 생성에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error creating rolling paper:", error);
      alert("롤링페이퍼 생성 중 오류가 발생했습니다.");
    }
  };

  return (
    <S.Container>
      <S.PageContainer>
        <S.ToContainer>
          <S.Heading>To.</S.Heading>
          <Input
            placeholder="받는 사람 이름을 입력해 주세요."
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)} // 입력값 업데이트
          />

          <S.Title>배경화면을 선택해 주세요.</S.Title>
          <S.SubTitle>
            컬러를 선택하거나, 이미지를 선택할 수 있습니다.
          </S.SubTitle>
        </S.ToContainer>

        <S.ToggleContainer>
          <S.ToggleWrapper role="group" aria-label="배경 선택 모드">
            <S.ToggleOption
              role="button"
              aria-pressed={mode === "color"}
              onClick={() => handleModeChange("color")}
              $active={mode === "color"}
            >
              컬러
            </S.ToggleOption>
            <S.ToggleOption
              role="button"
              aria-pressed={mode === "image"}
              onClick={() => handleModeChange("image")}
              $active={mode === "image"}
            >
              이미지
            </S.ToggleOption>
          </S.ToggleWrapper>
        </S.ToggleContainer>

        <SelectableBox
          items={mode === "color" ? COLORS : images} // 선택된 모드에 따라 데이터 전달
          selected={selected} // 현재 선택된 배경
          onSelect={handleSelect} // 선택 이미지 핸들러 전달
          type={mode} // 'color' 또는 'image' 전달
        />

        <Button
          large
          style={{ cursor: "pointer" }}
          $font={`${theme.font.H4Regular}`}
          onClick={handleSubmit}
        >
          생성하기
        </Button>
      </S.PageContainer>
    </S.Container>
  );
}
