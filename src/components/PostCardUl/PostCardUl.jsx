import * as S from "./PostCardUl.styles";
import trash from "../../assets/icons/trash.svg";
import Badge from "../Badge/Badge";

export default function PostCardUI({ data, isEdit = false, onClick }) {
  const fonts = {
    "Noto Sans": "Noto Sans KR",
    Pretendard: "Pretendard",
    나눔명조: "NanumMyeongjo",
    "나눔손글씨 손편지체": "Handletter",
  };

  const date = new Date(data.createdAt);
  const formattedDate = `${date.getFullYear()}.${String(
    date.getMonth() + 1
  ).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;

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
          <S.Trash data-value={data.id} onClick={onClick}>
            <img src={trash} />
          </S.Trash>
        )}
      </S.FromContainer>
      <S.Letter>
        <S.Content $font={fontFamily}>{data.content}</S.Content>
        <S.Date>{formattedDate}</S.Date>
      </S.Letter>
    </S.Card>
  );
}
