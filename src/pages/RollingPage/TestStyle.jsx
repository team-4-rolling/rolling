import styled from "styled-components";
import theme from "../../styles/theme";
//
export const Contents = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 245px;
  padding-bottom: 246px;
  background-color: ${theme.color.Purple400};
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

export const MessageBox = styled.div`
  //card 컴포넌트로 대체
  width: 384px;
  height: 280px;
  background-color: ${theme.color.White};
  border-radius: 16px;
`;
