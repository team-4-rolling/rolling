import * as S from "./ModalContent.styles";
import draftToHtml from "draftjs-to-html";
import Badge from "../Badge/Badge";

export default function ModalContent({ data }) {
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
        <S.Date>{formattedDate}</S.Date>
      </S.FromContainer>
      <S.Letter>
        <S.Content
          dangerouslySetInnerHTML={{
            __html: contentToHtml(),
          }}
          $font={fontFamily}
        />
      </S.Letter>
    </S.Card>
  );
}
