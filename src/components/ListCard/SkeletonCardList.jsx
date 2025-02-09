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
        setCount(3);
      } else if (width >= 360) {
        setCount(2);
      } else {
        setCount(1);
      }
    };

    updateCount();
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
