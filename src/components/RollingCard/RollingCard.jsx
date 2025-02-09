import * as S from "./RollingCard.styles";
import { EditorState, convertFromRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import trash from "../../assets/icons/trash.svg";
import Badge from "../Badge/Badge";

export default function RollingCard({ data, isEdit = false, onClick }) {
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

  const contentToHtml = () => {
    try {
      const content = JSON.parse(data.content);
      return draftToHtml(content);
    } catch {
      return data.content;
    }
  };

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
        <S.Content
          $font={fontFamily}
          dangerouslySetInnerHTML={{
            __html: contentToHtml(),
          }}
        />
        <S.Date>{formattedDate}</S.Date>
      </S.Letter>
    </S.Card>
  );
}
