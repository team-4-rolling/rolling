import * as S from "./CircleImages.styles";
import CircleImgLoading from "./Loading/CircleImgLoading";

export default function CircleImages({ messageCount, images, isLoading }) {
  if (isLoading) return <CircleImgLoading />;

  return (
    <S.Container>
      {images.map((i, idx) => (
        <S.Image key={idx} src={i} $idx={messageCount > 3 ? idx + 1 : idx} />
      ))}
      {messageCount > 3 && <S.Count>+{messageCount - 3}</S.Count>}
    </S.Container>
  );
}
