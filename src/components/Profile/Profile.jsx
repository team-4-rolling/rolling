import * as S from "./Profile.styles";
import { useState } from "react";
import ProfileLoading from "./Loading/ProfileLoading";

export default function Profile({ images, setImages, onChange, isLoading }) {
  const [selected, setSelected] = useState(0);

  if (isLoading) return <ProfileLoading />;

  return (
    <S.ProfileContainer>
      <S.Selected
        src={images[selected]}
        onClick={() => {
          setSelected(0);
          onChange(images[0]);
        }}
      />
      <S.ProfilesWrapper>
        <S.SelectText>프로필 이미지를 선택해주세요!</S.SelectText>
        <S.Profiles>
          {images.slice(1).map((profile, idx) => (
            <S.Profile
              key={profile}
              src={profile}
              onClick={() => {
                onChange(profile);
                setSelected(idx + 1);
              }}
            />
          ))}
        </S.Profiles>
      </S.ProfilesWrapper>
    </S.ProfileContainer>
  );
}
