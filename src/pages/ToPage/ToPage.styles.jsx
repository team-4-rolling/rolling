import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ToContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Heading = styled.div`
  font: ${theme.font.H2Bold};
  color: ${theme.color.Grayscale900};
  margin-top: 30px;
`;

export const PageContainer = styled.div`
  width: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Title = styled.div`
  font: ${theme.font.H2Bold};
  color: ${theme.color.Grayscale900};
  margin-top: 30px;
  height: 30px;
`;

export const SubTitle = styled.div`
  font: ${theme.font.H5Regular};
  color: ${theme.color.Grayscale500};
  height: 26px;
`;

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin: 20px 0;
`;

export const ToggleWrapper = styled.div`
  display: flex;
  position: relative;
  width: 244px;
  height: 40px;
  border-radius: 8px;
  background: ${theme.color.Grayscale200};
  text-align: center;
  margin-top: 0;
  overflow: hidden;
`;

export const ToggleOption = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 10px 20px;
  font: ${theme.font.H6Bold};
  text-align: center;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  background: ${({ active }) => (active ? "white" : "transparent")};
  color: ${({ active }) =>
    active ? theme.color.Purple600 : theme.color.Grayscale700};
  border: ${({ active }) =>
    active ? `2px solid ${theme.color.Purple600}` : "none"};
`;

export const ColorGrid = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const ColorBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 168px;
  height: 168px;
  border-radius: 8px;
  background-color: ${({ $color }) => $color};
  cursor: pointer;
  position: relative;

  &:hover {
    opacity: 0.8;
  }
`;

export const ImageGrid = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 168px;
  height: 168px;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  position: relative;
  background: ${({ backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage})` : theme.color.Grayscale300};

  ${({ selected }) =>
    selected &&
    `
    filter: brightness(0.6);
    border: 4px solid ${theme.color.Purple600};
  `}
`;

export const CheckIcon = styled.img`
  position: absolute;
  width: 44px;
  height: 44px;
`;
