import * as S from "./CircleImgLoading.styles";

export default function CircleImgLoading() {
  return (
    <S.Loading>
      {Array.from({ length: 4 }, (_, idx) => (
        <S.Circle $idx={idx} />
      ))}
    </S.Loading>
  );
}
