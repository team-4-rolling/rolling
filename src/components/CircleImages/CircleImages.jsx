import useLoading from "../../zustand/rollingPageLoading";
import * as S from "./CircleImages.styles";
import CircleImgLoading from "./Loading/CircleImgLoading";

export default function CircleImages({ messageCount, images }) {
  const { isLoading } = useLoading();

  if (isLoading) return <CircleImgLoading />;

  if (images.length === 0) return;

  return (
    <S.Container>
      {images.map((i, idx) => (
        <S.Image key={idx} src={i} $idx={messageCount > 3 ? idx + 1 : idx} />
      ))}
      {messageCount > 3 && <S.Count>+{messageCount - 3}</S.Count>}
    </S.Container>
  );
}
