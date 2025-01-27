import styled from "styled-components";
import theme from "../../../styles/theme";

export const Overlay = styled.div`
  //모달 배경
  background-color: grey;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ModalBox = styled.div`
  background-color: white;
  width: 600px;
  height: 476px;
  position: absolute; //화면 가운데 배치
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); // 정확히 중앙 정렬
  padding: 20px 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const FromContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative; /* Date를 absolute로 배치할 때 기준이 됨 */
  border-bottom: 1px solid ${theme.color.Grayscale200};
`;

export const From = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const UserImg = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 100px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const UserName = styled.div`
  font: ${theme.font.H3Bold};

  span {
    font: ${theme.font.H3Regular};
    margin-right: 6px;
  }
`;

export const Date = styled.div`
  position: absolute; /* 부모를 기준으로 배치 */
  top: 10; /* 부모의 위쪽으로 붙이기 */
  right: 0; /* 부모의 오른쪽으로 붙이기 */
  font: ${theme.font.H8};
  color: ${theme.color.Grayscale400};
`;

export const Letter = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; /* 버튼을 수평으로 가운데 정렬 */
  padding: 24px 0;
`;

export const Content = styled.p`
  width: 100%;
  height: 240px;
  font-family: ${({ $font }) => `'${$font}', sanserif`};
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: ${theme.color.Grayscale600};
  overflow-y: auto; /* 세로 스크롤 활성화 */
  text-align: left;
  padding-right: 10px; /* 스크롤바 공간 확보 */
  word-break: break-word; /* 긴 단어 줄바꿈 */
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* 버튼을 가운데 정렬 */
  margin-top: 20px;
`;
