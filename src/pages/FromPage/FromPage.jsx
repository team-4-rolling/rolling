import * as S from "./FromPage.styles";
import Input from "../../components/common/Input/Input";
import Button from "../../components/common/Button/Button";
import Select from "../../components/common/Select/Select";
import theme from "../../styles/theme";
import Profile from "../../components/Profile/Profile";
import { getProfiles } from "../../api/profiles";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RELATIONSHIP = ["지인", "친구", "동료", "가족"];
const FONT = ["Noto Sans", "Pretendard", "나눔명조", "나눔손글씨 손편지체"];

export default function FromPage() {
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState({
    sender: "",
    profileImageURL: null,
    relationship: "지인",
    content: "",
    font: "Noto Sans",
  });
  const { id } = useParams();

  useEffect(() => {
    getProfiles()
      .then((results) => {
        setImages(results);
        if (results.length > 0) {
          setMessage((prev) => ({ ...prev, profileImageURL: results[0] }));
        }
      })
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (name, value) => {
    setMessage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    postMessage(id, message);
  };

  return (
    <S.FromContainer>
      <S.From onSubmit={handleMessageSubmit}>
        <Input
          label="From."
          name="sender"
          placeholder="이름을 입력해 주세요"
          onChange={handleInputChange}
        />
        <S.Wrapper>
          <S.Label>프로필</S.Label>
          <Profile
            images={images}
            setImages={setImages}
            onChange={handleChange}
          />
        </S.Wrapper>
        <S.Wrapper>
          <S.Label>관계</S.Label>
          <Select
            options={RELATIONSHIP}
            name="relationship"
            onChange={handleChange}
          />
        </S.Wrapper>
        <S.Wrapper>
          <S.Label>내용을 입력해 주세요</S.Label>
          <S.Div />
        </S.Wrapper>
        <S.Wrapper>
          <S.Label>폰트</S.Label>
          <Select options={FONT} name="font" onChange={handleChange} />
        </S.Wrapper>
        <S.CreateBtn>
          <Button
            type="submit"
            medium
            $font={`${theme.font.H4Regular}`}
            style={{ width: "100%", cursor: "pointer" }}
          >
            생성하기
          </Button>
        </S.CreateBtn>
      </S.From>
    </S.FromContainer>
  );
}
