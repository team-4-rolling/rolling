import * as S from "./SecondHeader.styles";
import share from "../../../assets/icons/share.svg";
import smile from "../../../assets/icons/smile.svg";
import Line from "../Line/Line";
import CircleImages from "../../CircleImages/CircleImages";
import cat from "../../../assets/icons/cat.jpeg";

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
            <CircleImages writtenCount={data.writtenCount} images={sliceImage} />
            <S.Written>
              <span>{data.writtenCount}</span>명이 작성했어요!
            </S.Written>
          </S.WrittenContainer>
          <Line width="1px" height="28px" />
          <S.Box>
            <S.Icons></S.Icons>
            <S.Btns>
              <S.AddBtn>
                <img src={smile} />
                추가
              </S.AddBtn>
              <Line width="1px" height="28px" />
              <S.ShareBtn>
                <img src={share} />
              </S.ShareBtn>
            </S.Btns>
          </S.Box>
        </S.Div>
      </S.Header>
    </S.Container>
  );
}
