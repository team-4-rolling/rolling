import * as S from "../ToPage.styles";
import { useState } from "react";
import Input from "../../../components/common/Input/Input";
import Button from "../../../components/common/Button/Button";
import SelectableBox from "../../../components/SelectableBox/SelectableBox";
import theme from "../../../styles/theme";

const COLORS = [
  { key: "beige", color: theme.color.Beige200 },
  { key: "purple", color: theme.color.Purple200 },
  { key: "blue", color: theme.color.Blue200 },
  { key: "green", color: theme.color.Green200 },
];

export default function Form({
  images,
  dataToSend,
  handleChange,
  handleSubmit,
}) {
  const [mode, setMode] = useState("color"); // 배경 선택 모드 (color 또는 image)
  const defaultValue = mode === "color" ? "beige" : 0;
  const [selected, setSelected] = useState(defaultValue);

  const handleModeChange = (modeValue) => {
    setMode(modeValue);
    setSelected(modeValue === "color" ? "beige" : 0);
  };

  const handleSelect = (key) => {
    setSelected(key);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <S.PageContainer>
        <S.ToContainer>
          <Input
            label="To."
            placeholder="받는 사람 이름을 입력해 주세요."
            value={dataToSend.name}
            name="name"
            onChange={(e) => handleChange(e.target.name, e.target.value.trim())}
            errorMessage="이름을 입력해 주세요"
          />
        </S.ToContainer>

        <S.TitleContainer>
          <S.Title>배경화면을 선택해 주세요.</S.Title>
          <S.SubTitle>
            컬러를 선택하거나, 이미지를 선택할 수 있습니다.
          </S.SubTitle>
        </S.TitleContainer>

        <S.ToggleContainer>
          <S.ToggleWrapper role="group" aria-label="배경 선택 모드">
            {/* 컬러 선택 버튼 */}
            <S.ToggleOption
              role="button"
              aria-pressed={mode === "color"}
              onClick={() => {
                handleModeChange("color");
                handleChange("backgroundImageURL", null);
              }}
              $active={mode === "color"}
            >
              컬러
            </S.ToggleOption>
            {/* 이미지 선택 버튼 */}
            <S.ToggleOption
              role="button"
              aria-pressed={mode === "image"}
              onClick={() => {
                handleModeChange("image");
                handleChange("backgroundImageURL", images[0]);
              }}
              $active={mode === "image"}
            >
              이미지
            </S.ToggleOption>
          </S.ToggleWrapper>
        </S.ToggleContainer>

        {/* 배경 선택 박스  */}
        <S.BoxContainer>
          <SelectableBox
            items={mode === "color" ? COLORS : images}
            selected={selected}
            onClick={handleChange}
            onSubmit={handleSubmit}
            onSelect={handleSelect}
            type={mode}
          />
        </S.BoxContainer>

        <S.ButtonContainer>
          <Button
            large
            type="submit" // 폼 제출 버튼으로 변경
            onClick={handleSubmit}
            $font={`${theme.font.H4Regular}`}
            disabled={!dataToSend.name.trim()} // 이름이 없으면 비활성화
          >
            생성하기
          </Button>
        </S.ButtonContainer>
      </S.PageContainer>
    </form>
  );
}
