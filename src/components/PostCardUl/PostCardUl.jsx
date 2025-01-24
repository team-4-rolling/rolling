import * as S from "./PostCardUl.styles";
import trash from "../../assets/icons/trash.svg";
import cat from "../../assets/icons/cat.jpeg";
import Badge from "../Badge/Badge";

const data = {
  profileImageURL: cat,
  sender: "김동훈",
  relationship: "동료",
  content:
    "훈훈, 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!",
  font: "나눔손글씨 손편지체",
  createdAt: "2025.01.23",
};

export default function PostCardUI({ isEdit = false }) {
  const fonts = {
    "Noto Sans": "Noto Sans KR",
    Pretendard: "Pretendard",
    나눔명조: "NanumMyeongjo",
    "나눔손글씨 손편지체": "Handletter",
  };

  const fontFamily = fonts[data.font];

  return (
    <S.Card>
      <S.FromContainer>
        <S.From>
          <S.UserImg src={data.profileImageURL} />
          <S.UserInfo>
            <S.UserName>
              <span>From.</span>
              {data.sender}
            </S.UserName>
            <Badge relationship={data.relationship} />
          </S.UserInfo>
        </S.From>
        {isEdit && (
          <S.Trash>
            <img src={trash} />
          </S.Trash>
        )}
      </S.FromContainer>
      <S.Letter>
        <S.Content $font={fontFamily}>{data.content}</S.Content>
        <S.Date>{data.createdAt}</S.Date>
      </S.Letter>
    </S.Card>
  );
}
