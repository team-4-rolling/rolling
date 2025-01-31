import * as S from "./CircleImages.styles";

export default function CircleImages({ messageCount, images }) {
  return (
    <S.Container>
      {images.map((i, idx) => (
        <S.Image key={idx} src={i} $idx={messageCount > 3 ? idx + 1 : idx} />
      ))}
      {messageCount > 3 && <S.Count>+{messageCount - 3}</S.Count>}
    </S.Container>
  );
}
