//style 사본 파일 입니다.
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
  padding: 113px 30px 500px;
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
  position: static;
  margin: 0 auto 11px;
  justify-content: right;

  //반응형 부분
  @media (max-width: 480px) {
    width: 320px;
    height: 56px;
    justify-content: center;
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 720px;
    height: 56px;
    justify-content: center;
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (min-width: 769px) and (max-width: 1280px) {
    width: 1000px;
    height: 39px;
    justify-content: right;
    position: static;
  }
`;

export const ButtonContain = styled.div`
  height: 39px;
  width: 92px;

  @media (max-width: 480px) {
    width: 320px;

    height: 56px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    min-width: 460px;
    height: 39px;
  }
  @media (min-width: 769px) and (max-width: 1280px) {
    height: 39px;
    min-width: 440px;
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
    gap: 20px; //laptop일때 gap 20
    grid-template-columns: repeat(2, 1fr);
  }
`;

//+ 박스 부분, 희진님 card 부분이랑 동일하게 작성했습니다.
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
    min-width: 352px; //laptop일때
    height: 284px;
  }
`;
export const Plus = styled.img`
  width: 56px;
  height: 56px;
`;
