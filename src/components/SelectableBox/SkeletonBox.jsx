import * as S from "./SkeletonBox.styles.jsx";

export default function Skeleton() {
  return (
    <S.Grid>
      {Array.from({ length: 4 }, (_, index) => (
        <S.SkeletonBox key={index} />
      ))}
    </S.Grid>
  );
}
