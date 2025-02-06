import * as S from "./SecondHeader.styles";
import Line from "../Line/Line";
import CircleImages from "../../CircleImages/CircleImages";
import Emoji from "../../Emoji/Emoji";
import ShareButton from "../../ShareButton/ShareButton";

export default function SecondHeader({
  recipientId,
  name,
  messageCount,
  recentMessages,
}) {
  const images = recentMessages.map((i) => i.profileImageURL);

  return (
    <>
      <S.Username>To. {name}</S.Username>
      <S.Container>
        <S.Header>
          <S.ToUser>To. {name}</S.ToUser>
          <S.Div>
            <S.WrittenContainer>
              {images.length !== 0 && (
                <CircleImages messageCount={messageCount} images={images} />
              )}
              <S.Written>
                <span>{messageCount}</span>명이 작성했어요!
              </S.Written>
            </S.WrittenContainer>
            <S.Box>
              <Emoji recipientId={recipientId} />
              <Line width="1px" height="28px" />
              <ShareButton />
            </S.Box>
          </S.Div>
        </S.Header>
      </S.Container>
    </>
  );
}
