import * as S from "./Profile.styles";
import { useState, useEffect, useCallback } from "react";
import { getProfiles } from "../../api/images.api";
import ProfileLoading from "./Loading/ProfileLoading";

export default function Profile({ setMessage, onChange }) {
  const [selected, setSelected] = useState(0);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProfilesImg = () => {
    getProfiles()
      .then((results) => {
        setImages(results);
        if (results.length > 0) {
          setMessage((prev) => ({ ...prev, profileImageURL: results[0] }));
        }
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getProfilesImg();
  }, []);

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
