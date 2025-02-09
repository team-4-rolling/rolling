import styled from "styled-components";
import theme from "../../styles/theme";

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
`;

export const Selected = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  cursor: pointer;
`;

export const SelectText = styled.div`
  margin-bottom: 12px;
  font: ${theme.font.H5Regular};
  color: ${theme.color.Grayscale500};
`;

export const ProfilesWrapper = styled.div`
  width: 100%;
`;

export const Profiles = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const Profile = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
