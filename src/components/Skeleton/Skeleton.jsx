import * as S from "./Skeleton.style";

export default function Skeleton() {
  return (
    <>
      <S.SkeletonBox>
        <S.SkeletonUserFlex>
          <S.SkeletonProfile />
          <S.SkeletonContent />
        </S.SkeletonUserFlex>
      </S.SkeletonBox>
      <S.SkeletonBox>
        <S.SkeletonUserFlex>
          <S.SkeletonProfile />
          <S.SkeletonContent />
        </S.SkeletonUserFlex>
      </S.SkeletonBox>
    </>
  );
}
