import * as S from "./Badge.styles";

export default function Badge({ relationship }) {
  return (
    <S.BadgeContainer $R={relationship}>
      <S.Badge>{relationship}</S.Badge>
    </S.BadgeContainer>
  );
}
