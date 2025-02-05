import { useNavigate } from "react-router-dom";
import * as S from "./ToPage.styles";
import { useState, useEffect } from "react";
import Button from "../../components/common/Button/Button";
import theme from "../../styles/theme";
import SelectableBox from "../../components/SelectableBox/SelectableBox";
import Input from "../../components/common/Input/Input";
import { getBackgroundImages, submitToPage } from "../../api/toPageData";
import { showToast } from "../../components/common/Toast/Toast";

// 컬러 선택을 위한 옵션 리스트
const COLORS = [
  { key: "beige", color: theme.color.Beige200 },
  { key: "purple", color: theme.color.Purple200 },
  { key: "blue", color: theme.color.Blue200 },
  { key: "green", color: theme.color.Green200 },
];

export default function ToPage() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("color"); // 배경 선택 모드 (color 또는 image)
  const defaultValue = mode === "color" ? "beige" : 0; // 선택된 값 (기본값: 컬러 모드면 "beige", 이미지 모드면 0번 인덱스)
  const [selected, setSelected] = useState(defaultValue);
  const [images, setImages] = useState([]); // 배경 이미지 리스트
  const [dataToSend, setDataToSend] = useState({
    // API로 보낼 데이터 객체
    name: "",
    backgroundColor: "beige",
    backgroundImageURL: null,
  });

  useEffect(() => {
    // 마운트 시 배경 이미지 리스트 가져오기
    getBackgroundImages()
      .then((response) => {
        setImages(response);
      })
      .catch((error) => console.error("Failed to fetch images:", error));
  }, []);

  /**
   * 배경 선택 모드 변경 (컬러 or 이미지)
   * - 컬러 선택 시: 기본값 "beige"
   * - 이미지 선택 시: 기본값 0번 인덱스
   */
  const handleModeChange = (newMode) => {
    setMode(newMode);
    setSelected(newMode === "color" ? "beige" : 0);
  };

  // 사용자가 색상 또는 이미지를 선택하면 `selected` 값 업데이트
  const handleSelect = (key) => {
    setSelected(key);
  };

  // dataToSend 상태 업데이트 (이름, 배경색, 배경 이미지 변경 시 사용)
  const handleChange = (name, value) => {
    setDataToSend((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 이름 입력 필드 변경 핸들러 (handleChange 활용)
  const handleNameChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  // `submitToPage` API 호출 후 성공하면 해당 페이지로 이동
  const handleSubmit = async () => {
    await submitToPage(dataToSend)
      .then((id) => {
        showToast(
          `${dataToSend.name} 님의 롤링페이퍼 생성에 성공했습니다!`,
          "success",
          "top"
        );
        navigate(`/post/${id}`);
      })
      .catch((error) => console.error("Error creating rolling paper:", error));
  };

  return (
    <div style={{ overflow: "auto" }}>
      <S.PageContainer>
        <S.ToContainer>
          <Input
            label="To."
            placeholder="받는 사람 이름을 입력해 주세요."
            value={dataToSend.name}
            name="name"
            onChange={handleNameChange}
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
                handleChange("backgroundImageURL", null); // 이미지 헤제
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
                handleChange("backgroundImageURL", images[0]); // 첫 번째 이미지 선택
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
            // type="submit" //강사님이 수정해주신거
            onClick={handleSubmit}
            $font={`${theme.font.H4Regular}`}
            disabled={!dataToSend.name.trim()} // 이름이 없으면 비활성화
          >
            생성하기
          </Button>
        </S.ButtonContainer>
      </S.PageContainer>
    </div>
  );
}
