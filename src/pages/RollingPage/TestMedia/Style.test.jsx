//style 사본 파일 입니다.
import styled from "styled-components";
import theme from "../../../styles/theme";
//
/**         d          l      t         m
 * 카드 사이즈 384ㅡ280 ->???->  352,284 ->320,230
 * 그리드 3 -> 3-> 2->1
 * 갭 24,28 -> ??-> 16-> 16
 * 버튼 현재 -> ??? -> 720, 55 (하단에서 24px 떨어져서 fixed )-> 320,56 (하단에서 24px)
 * 그리드 박스 container 1200 -> ??? -> 720 -> 320
 */
export const Contents = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 113px;
  padding-bottom: 500px;
  background-image: ${(props) => (props.$img ? `url(${props.$img})` : "none")};
  background-color: ${(props) =>
    props.$img ? "transparent" : theme.color[props.color]};

  background-size: cover;
  background-position: center top;
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
  width: ${({ device }) => {
    const sizes = { mobile: "320px", tablet: "720px", desktop: "1200px" };
    return sizes[device] || "1200px";
  }};
  grid-auto-rows: 1fr;
  display: grid;
  margin: 0px auto;
  grid-template-columns: ${({ device }) => {
    const sizes = {
      mobile: "1fr",
      tablet: "repeat(2, 1fr)",
      desktop: "repeat(3, 1fr)",
    };
    return sizes[device] || "repeat(3, 1fr)";
  }};
  gap: ${({ device }) => {
    const sizes = { mobile: "16px", tablet: "16px", desktop: "28px 24px" };
    return sizes[device] || "28px 24px";
  }};
`;

export const CreateBox = styled.div`
  width: ${(props) => {
    const sizes = { mobile: "320px", tablet: "352px", desktop: "384px" };
    return sizes[props.device] || "384px";
  }};
  height: ${({ device }) => {
    const sizes = { mobile: "230x", tablet: "284px", desktop: "280px" };
    return sizes[device] || "280px";
  }};
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
