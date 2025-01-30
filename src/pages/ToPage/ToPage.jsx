import * as S from "./ToPage.styles";
import { useState, useEffect } from "react";
import Button from "../../components/common/Button/Button";
import theme from "../../styles/theme";
import SelectableBox from "./SelectableBox";

const COLORS = [
  { key: "beige", color: theme.color.Beige200 },
  { key: "purple", color: theme.color.Purple200 },
  { key: "blue", color: theme.color.Blue200 },
  { key: "green", color: theme.color.Green200 },
];

export default function ToPage() {
  const [mode, setMode] = useState("color");
  const [selected, setSelected] = useState("beige");
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/api/images")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setSelected(newMode === "color" ? selected : null); // 기존 선택값 유지
  };

  const handleSelect = (key) => {
    setSelected(key);
  };

  const handleSubmit = () => {
    const dataToSend = {
      background: mode === "color" ? selected : selected || null,
    };

    console.log("데이터 전송:", dataToSend);
  };

  return (
    <S.Container>
      <S.PageContainer>
        <S.ToContainer>
          <S.Heading>To.</S.Heading>
          <input placeholder="받는 사람 이름을 입력해 주세요." />

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
              active={mode === "color"}
            >
              컬러
            </S.ToggleOption>
            <S.ToggleOption
              role="button"
              aria-pressed={mode === "image"}
              onClick={() => handleModeChange("image")}
              active={mode === "image"}
            >
              이미지
            </S.ToggleOption>
          </S.ToggleWrapper>
        </S.ToggleContainer>

        <SelectableBox
          items={mode === "color" ? COLORS : images}
          selected={selected}
          onSelect={handleSelect}
          type={mode}
        />

        <Button
          large
          style={{ cursor: "pointer" }}
          font={`${theme.font.H3Regular}`}
          onClick={handleSubmit}
        >
          생성하기
        </Button>
      </S.PageContainer>
    </S.Container>
  );
}
