import styled from "styled-components";
import theme from "../../../styles/theme";

export const InputWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
`;
export const Input = styled.input`
  width: 100%;
  height: 50px;
  outline: none;
  align-items: center;
  border-radius: 8px;
  padding: 12px 16px;
  border: ${(props) =>
    props.$isError
      ? `1px solid ${theme.color.Error}`
      : `1px solid ${theme.color.Grayscale300}`};
  font: ${theme.font.H5Regular};
  ::placeholder {
    color: ${theme.color.Grayscale500};
    font: ${theme.font.H5Regular};
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 4px;
  letter-spacing: -0.5%;
  font: ${theme.font.HB};
  color: ${theme.color.Error};
`;

export const Label = styled.label`
  font: ${theme.font.H2Bold};
`;
