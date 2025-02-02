import * as S from "./FromPage.styles";
import Input from "../../components/common/Input/Input";
import Button from "../../components/common/Button/Button";
import Select from "../../components/common/Select/Select";
import theme from "../../styles/theme";
import Profile from "../../components/Profile/Profile";

const RELATIONSHIP = ["지인", "친구", "동료", "가족"];
const FONT = ["Noto Sans", "Pretendard", "나눔명조", "나눔손글씨 손편지체"];

export default function FromPage() {
  return (
    <S.FromContainer>
      <S.From>
        <Input label="From." placeholder="이름을 입력해 주세요" />
        <S.Wrapper>
          <S.Label>프로필</S.Label>
          <Profile />
        </S.Wrapper>
        <S.Wrapper>
          <S.Label>관계</S.Label>
          <Select options={RELATIONSHIP} />
        </S.Wrapper>
        <S.Wrapper>
          <S.Label>내용을 입력해 주세요</S.Label>
          <S.Div />
        </S.Wrapper>
        <S.Wrapper>
          <S.Label>폰트</S.Label>
          <Select options={FONT} />
        </S.Wrapper>
        <S.CreateBtn>
          <Button
            medium
            font={`${theme.font.H4Regular}`}
            style={{ width: "100%", cursor: "pointer" }}
          >
            생성하기
          </Button>
        </S.CreateBtn>
      </S.From>
    </S.FromContainer>
  );
}
