import styled from "styled-components";
import theme from "../../styles/theme";

export const FromContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

export const From = styled.form`
  width: 720px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Label = styled.h2`
  font: ${theme.font.H2Bold};
  color: ${theme.color.Grayscale900};
`;

export const Div = styled.div`
  width: 100%;
  height: 260px;
  background-color: #cccccc;
`;

export const CreateBtn = styled.div`
  width: 100%;
`;
