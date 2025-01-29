import * as S from "./SecondHeader.styles";
import share from "../../../assets/icons/share.svg";
import smile from "../../../assets/icons/smile.svg";
import Line from "../Line/Line";
import CircleImages from "../../CircleImages/CircleImages";
import cat from "../../../assets/icons/cat.jpeg";
import Button from "../Button/Button";
import theme from "../../../styles/theme";

export default function SecondHeader() {
  const data = {
    name: "Ashley Kim",
    writtenCount: 7,
    images: [cat, cat, cat, cat, cat, cat, cat],
  };

  const sliceImage = data.images.slice(0, 3);

  return (
    <S.Container>
      <S.Header>
        <S.ToUser>To. {data.name}</S.ToUser>
        <S.Div>
          <S.WrittenContainer>
            {data.images.length !== 0 && <CircleImages writtenCount={data.writtenCount} images={sliceImage} />}
            <S.Written>
              <span>{data.writtenCount}</span>명이 작성했어요!
            </S.Written>
          </S.WrittenContainer>
          <Line width="1px" height="28px" />
          <S.Box>
            <S.Icons></S.Icons>
            <S.Btns>
              <Button outlineMedium $font={`${theme.font.H5Regular}`} style={{ cursor: "pointer" }}>
                <img src={smile} style={{ marginRight: "4px" }} />
                추가
              </Button>
              <Line width="1px" height="28px" />
              <Button outlinesmall style={{ cursor: "pointer" }}>
                <img src={share} />
              </Button>
            </S.Btns>
          </S.Box>
        </S.Div>
      </S.Header>
    </S.Container>
  );
}
