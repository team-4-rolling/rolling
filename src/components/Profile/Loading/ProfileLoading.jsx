import * as S from "./ProfileLoading.styles";

export default function ProfileLoading() {
  return (
    <S.Loading>
      <S.Onecircle />
      <S.CircleContainer>
        <S.Circles>
          {Array.from({ length: 8 }, (_, idx) => (
            <S.Circle key={idx} />
          ))}
        </S.Circles>
      </S.CircleContainer>
    </S.Loading>
  );
}
