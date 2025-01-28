import styled from "styled-components";
import theme from "../../styles/theme";
//
export const Contents = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 113px;
  padding-bottom: 500px;
  background-color: ${(props) => props.color || "transparent"};
  background-image: ${(props) => (props.$img ? `url(${props.$img})` : "none")};
  background-size: cover; /* 이미지가 요소를 완전히 덮도록 설정 */
  background-position: center top; /* 이미지를 상단에 위치 */
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const ButtonDiv = styled.div`
  width: 1200px;
  display: flex;
  margin: 0px auto 11px;
  justify-content: right;
`;
export const GridBoxes = styled.div`
  width: 1200px;
  display: grid;
  margin: 0px auto;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: 28px 24px;
`;
export const CreateBox = styled.div`
  width: 384px;
  height: 280px;
  background-color: ${theme.color.White};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Plus = styled.img`
  width: 56px;
  height: 56px;
`;
