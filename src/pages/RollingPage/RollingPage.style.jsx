import styled from "styled-components";
import theme from "../../styles/theme";

//배경컬러, 이미지 부분
export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${(props) => (props.$img ? `url(${props.$img})` : "none")};
  background-color: ${(props) =>
    props.$img ? "transparent" : theme.color[props.color]};
  background-size: cover;
  background-position: center center;
  transform: translateZ(0);
  will-change: transform;
  z-index: -1;
`;

//전체 영역
export const Contents = styled.div`
  width: 100%;
  height: 100%;
  padding: 113px 30px 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
//버튼 div
export const ButtonFlex = styled.div`
  margin: 0px auto 11px;
  height: 39px;
  width: 1200px;
  display: flex;
  gap: 10px;
  position: static;
  margin: 0 auto 11px;
  justify-content: right;
  padding-left: 10px;
  padding-right: 10px;

  //반응형 부분
  @media (max-width: 480px) {
    width: 100%;
    height: 56px;
    justify-content: center;
    position: fixed;
    margin: 0 auto;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    gap: 8px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    height: 56px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (min-width: 769px) and (max-width: 1280px) {
    width: 100%;
  }
`;

export const ButtonContain = styled.div`
  height: 39px;
  width: 140px;

  @media (max-width: 480px) {
    width: 200px;
    height: 56px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    max-width: 720px;
    min-width: 320px;
    width: 100%;
    height: 39px;
  }
`;
//버튼 div 아래 그리드 영역
export const GridBoxes = styled.div`
  width: 1200px;
  min-width: 320px;
  grid-auto-rows: 1fr;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px 24px;

  @media (max-width: 480px) {
    width: 100%;
    gap: 16px;
    grid-template-columns: 1fr;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;
    gap: 16px;
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    width: 100%;
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CreateBox = styled.div`
  width: 100%;
  height: 280px;
  background-color: ${theme.color.White};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 12px rgb(0 0 0 / 8%);

  @media (max-width: 480px) {
    min-width: 320px;
    height: 230px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    min-width: 320px;
    height: 284px;
  }
  @media (min-width: 769px) and (max-width: 1280px) {
    min-width: 352px;
    height: 284px;
  }
`;
export const Plus = styled.img`
  width: 56px;
  height: 56px;
`;

export const ScrollUpButton = styled.button`
  width: 55px;
  height: 55px;
  border-radius: 100px;
  border: none;
  position: fixed;
  bottom: 120px;
  right: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.Grayscale600};
`;

export const Arrow = styled.img`
  width: 30px;
  height: 30px;
  bottom: 120px;
  right: 60px;
`;
