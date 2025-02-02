import * as S from "./Profile.styles";
import { useEffect, useState } from "react";
import { getProfiles } from "../../api/profiles";

export default function Profile() {
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    getProfiles()
      .then((results) => setImages(results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <S.ProfileContainer>
      <S.Selected src={images[selected]} onClick={() => setSelected(0)} />
      <S.ProfilesWrapper>
        <S.SelectText>프로필 이미지를 선택해주세요!</S.SelectText>
        <S.Profiles>
          {images.slice(1).map((profile, idx) => (
            <S.Profile
              key={profile}
              src={profile}
              onClick={() => setSelected(idx + 1)}
            />
          ))}
        </S.Profiles>
      </S.ProfilesWrapper>
    </S.ProfileContainer>
  );
}
