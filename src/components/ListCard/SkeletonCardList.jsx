import React, { useState, useEffect } from "react";
import {
  Slide,
  ProfileContainer,
  Divider,
  ReactionsContainer,
} from "./Listcard.style";
import {
  SkeletonContainer,
  SkeletonCardBox,
  SkeletonTitle,
  SkeletonProfile,
  SkeletonMessageCount,
  SkeletonReaction,
} from "./SkeletonList.style";

const SkeletonCardList = () => {
  const [count, setCount] = useState(4);

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCount(4);
      } else if (width >= 768) {
        setCount(3); // 2.6개 표현을 위해 반 내림 → 3개
      } else if (width >= 360) {
        setCount(2); // 1.6개 표현을 위해 반 내림 → 2개
      } else {
        setCount(1);
      }
    };

    updateCount(); // 초기 실행
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return (
    <SkeletonContainer>
      {Array.from({ length: count }).map((_, index) => (
        <Slide key={index}>
          <SkeletonCardBox>
            <SkeletonTitle />
            <ProfileContainer>
              <SkeletonProfile />
              <SkeletonProfile />
              <SkeletonProfile />
            </ProfileContainer>
            <SkeletonMessageCount />
            <Divider />
            <ReactionsContainer>
              <SkeletonReaction />
              <SkeletonReaction />
              <SkeletonReaction />
            </ReactionsContainer>
          </SkeletonCardBox>
        </Slide>
      ))}
    </SkeletonContainer>
  );
};

export default SkeletonCardList;
