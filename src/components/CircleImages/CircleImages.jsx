import * as S from "./CircleImages.styles";

export default function CircleImages({ writtenCount, images }) {
  return (
    <S.Container>
      {images.map((i, idx) => (
        <S.Image key={idx} src={i} $idx={idx} />
      ))}
      <S.Count>+{writtenCount - 3}</S.Count>
    </S.Container>
  );
}
