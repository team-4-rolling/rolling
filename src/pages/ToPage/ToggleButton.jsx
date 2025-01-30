import * as S from "./ToPage.styled";

export default function ToggleButton({ mode, onToggle }) {
  return (
    <S.ToggleContainer>
      <S.ToggleWrapper role="group" aria-label="배경 선택 모드">
        <S.ToggleOption
          role="button"
          aria-pressed={mode === "color"}
          onClick={() => onToggle("color")}
          active={mode === "color"}
        >
          컬러
        </S.ToggleOption>
        <S.ToggleOption
          role="button"
          aria-pressed={mode === "image"}
          onClick={() => onToggle("image")}
          active={mode === "image"}
        >
          이미지
        </S.ToggleOption>
      </S.ToggleWrapper>
    </S.ToggleContainer>
  );
}
