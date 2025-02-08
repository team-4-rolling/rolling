import * as S from "./FromPage.styles";
import Input from "../../components/common/Input/Input";
import Button from "../../components/common/Button/Button";
import Select from "../../components/common/Select/Select";
import theme from "../../styles/theme";
import Profile from "../../components/Profile/Profile";
import EditorContent from "../../components/Editor/Editor";
import { showToast } from "../../components/common/Toast/Toast";
import { postMessage } from "../../api/messages.api";
import { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

const RELATIONSHIP = ["지인", "친구", "동료", "가족"];
const FONT = ["Noto Sans", "Pretendard", "나눔명조", "나눔손글씨 손편지체"];

export default function FromPage() {
  const [message, setMessage] = useState({
    sender: "",
    profileImageURL: null,
    relationship: "지인",
    content: "",
    font: "Noto Sans",
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const editorRef = useRef();

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

  const handleMessageSubmit = () => {
    postMessage(id, message)
      .then(() => {
        showToast("메시지 전달 성공🎉", "success", "top");
        navigate(`/post/${id}`);
      })
      .catch((error) => {
        console.error(error);
        showToast("메시지 전달 실패😞", "error", "top");
      });
  };

  const fromValidate = message.sender.trim() && message.content.trim();

  return (
    <S.FromContainer>
      <S.From>
        <S.InputContainer>
          <Input
            label="From."
            name="sender"
            placeholder="이름을 입력해 주세요"
            onChange={handleInputChange}
          />
        </S.InputContainer>
        <S.Wrapper>
          <S.Label>프로필</S.Label>
          <Profile
            setMessage={setMessage}
            onChange={(value) => handleChange("profileImageURL", value)}
          />
        </S.Wrapper>
        <S.Wrapper>
          <S.Label>관계</S.Label>
          <Select
            options={RELATIONSHIP}
            onChange={(value) => handleChange("relationship", value)}
          />
        </S.Wrapper>
        <S.Wrapper>
          <S.Label>내용을 입력해 주세요</S.Label>
          <EditorContent
            editorRef={editorRef}
            content={message.content}
            onChange={(value) => handleChange("content", value)}
          />
        </S.Wrapper>
        <S.Wrapper>
          <S.Label>폰트</S.Label>
          <Select
            options={FONT}
            onChange={(value) => handleChange("font", value)}
          />
        </S.Wrapper>
        <S.CreateBtn>
          <Button
            medium
            $font={`${theme.font.H4Regular}`}
            style={{ width: "100%" }}
            onClick={handleMessageSubmit}
            disabled={!fromValidate}
          >
            생성하기
          </Button>
        </S.CreateBtn>
      </S.From>
    </S.FromContainer>
  );
}
