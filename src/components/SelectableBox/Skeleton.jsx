import * as S from "./Skeleton.styles.jsx";

export default function Skeleton() {
  return (
    <S.Grid>
      {Array.from({ length: 4 }).map((_, index) => (
        <S.SkeletonBox key={index} />
      ))}
    </S.Grid>
  );
}
