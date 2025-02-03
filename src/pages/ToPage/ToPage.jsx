import { useNavigate } from "react-router-dom";
import * as S from "./ToPage.styles";
import { useState, useEffect } from "react";
import Button from "../../components/common/Button/Button";
import theme from "../../styles/theme";
import SelectableBox from "./SelectableBox";
import Input from "../../components/common/Input/Input";
import { getBackgroundImages, submitToPage } from "../../api/toPageData";

const COLORS = [
  { key: "beige", color: theme.color.Beige200 },
  { key: "purple", color: theme.color.Purple200 },
  { key: "blue", color: theme.color.Blue200 },
  { key: "green", color: theme.color.Green200 },
];

export default function ToPage() {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [mode, setMode] = useState("color");
  const defaultValue = mode === "color" ? "beige" : 0;
  const [selected, setSelected] = useState(defaultValue);
  const [images, setImages] = useState([]);
  const [dataToSend, setDataToSend] = useState({
    name: "",
    backgroundColor: "beige",
    backgroundImageURL: null,
  });

  useEffect(() => {
    getBackgroundImages()
      .then((response) => {
        setImages(response);
      })
      .catch((error) => console.error("Failed to fetch images:", error));
  }, []);

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setSelected(newMode === "color" ? "beige" : 0);
  };

  const handleSelect = (key) => {
    setSelected(key);
  };

  const handleChange = (name, value) => {
    setDataToSend((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = async () => {
    if (!dataToSend.name.trim()) {
      setError("이름을 입력해 주세요");
      return;
    }

    await submitToPage(dataToSend)
      .then((id) => {
        alert("🎉성공");
        navigate(`/post/${id}`);
      })
      .catch((error) => console.error("Error creating rolling paper:", error));
  };

  console.log(dataToSend);

  return (
    <S.Container>
      <S.PageContainer>
        <S.ToContainer>
          <S.Heading>To.</S.Heading>
          <Input
            placeholder="받는 사람 이름을 입력해 주세요."
            value={dataToSend.name}
            name="name"
            onChange={handleNameChange}
            // $errorMessage={error}
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
              onClick={() => {
                handleModeChange("color");
                handleChange("backgroundImageURL", null);
              }}
              $active={mode === "color"}
            >
              컬러
            </S.ToggleOption>
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

        <SelectableBox
          items={mode === "color" ? COLORS : images}
          selected={selected}
          onClick={handleChange}
          onSelect={handleSelect}
          type={mode}
        />
        <S.ButtonContainer>
          <Button
            large
            $font={`${theme.font.H4Regular}`}
            onClick={handleSubmit}
            disabled={!dataToSend.name.trim()} // 이름이 없으면 비활성화
          >
            생성하기
          </Button>
        </S.ButtonContainer>
      </S.PageContainer>
    </S.Container>
  );
}
