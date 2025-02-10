import styled from "styled-components";
import theme from "../../styles/theme";

export const FromContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 24px 250px;

  @media (min-width: 481px;) and (max-width: 768px) {
    padding: 24px 24px 350px;
  }

  @media (max-width: 480px) {
    padding: 24px 24px 200px;
  }
`;

export const From = styled.div`
  width: 720px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;

  @media (max-width: 768px) {
    width: 100%;
  }
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

export const CreateBtn = styled.div`
  max-width: 720px;
  width: 100%;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  @media (max-width: 768px) {
    min-width: 320px;
    padding: 0 16px;
  }
`;
