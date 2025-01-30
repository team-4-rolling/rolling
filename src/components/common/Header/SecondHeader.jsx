import * as S from "./SecondHeader.styles";
import share from "../../../assets/icons/share.svg";
import smile from "../../../assets/icons/smile.svg";
import Line from "../Line/Line";
import CircleImages from "../../CircleImages/CircleImages";
import cat from "../../../assets/icons/cat.jpeg";
import Button from "../Button/Button";
import theme from "../../../styles/theme";

export default function SecondHeader({ name, messageCount, recentMessages }) {
  const images = recentMessages.map((i) => i.profileImageURL);

  return (
    <>
      <S.Username>To. {name}</S.Username>
      <S.Container>
        <S.Header>
          <S.ToUser>To. {name}</S.ToUser>
          <S.Div>
            <S.WrittenContainer>
              {images.length !== 0 && <CircleImages writtenCount={messageCount} images={images} />}
              <S.Written>
                <span>{messageCount}</span>명이 작성했어요!
              </S.Written>
            </S.WrittenContainer>
            <S.Box>
              <S.Icons></S.Icons>
              <S.Btns>
                <S.Emoji>
                  <Button outlineMedium $font={`${theme.font.H5Regular}`} style={{ cursor: "pointer", width: "100%" }}>
                    <img src={smile} />
                    <span>추가</span>
                  </Button>
                </S.Emoji>
                <Line width="1px" height="28px" />
                <S.Share>
                  <Button outlinesmall style={{ cursor: "pointer", width: "100%" }}>
                    <img src={share} />
                  </Button>
                </S.Share>
              </S.Btns>
            </S.Box>
          </S.Div>
        </S.Header>
      </S.Container>
    </>
  );
}
