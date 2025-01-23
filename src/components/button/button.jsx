import styled from "styled-components";
import { MainPrimaryButton } from "../../components/button/button.jsx";

// 버튼 컴포넌트 공통 인터페이스
export function Button({
  type = "primary",
  title,
  onClick,
  className,
  disabled = false,
}) {
  const ButtonComponent = buttonVariants[type] || PrimaryButtonLayout;
  return (
    <ButtonComponent
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {type === "circle" ? <CircleIcon /> : title}
    </ButtonComponent>
  );
}

// 버튼 타입별 스타일 정의
const buttonBaseStyles = `
  padding: 14px 24px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: -0.18px;
  width: 100%;
  
  @media (min-width: 1200px) {
    width: 280px;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme["--purple-900"]};
  }
  &:disabled {
    background-color: ${({ theme }) => theme["--gray-300"]};
  }
`;

const PrimaryButtonLayout = styled.button`
  ${buttonBaseStyles}
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme["--purple-600"]};

  &:hover {
    background-color: ${({ theme }) => theme["--purple-700"]};
  }
  &:active {
    background-color: ${({ theme }) => theme["--purple-800"]};
  }
`;

const SecondaryButtonLayout = styled(PrimaryButtonLayout)`
  width: 122px;
  padding: 7px 16px;
  font-size: 16px;
  font-weight: 400;
  border: 1px solid ${({ theme }) => theme["--purple-600"]};
  color: ${({ theme }) => theme["--purple-700"]};
  background-color: ${({ theme }) => theme.white};

  &:hover {
    border-color: ${({ theme }) => theme["--purple-700"]};
    background-color: ${({ theme }) => theme["--purple-100"]};
  }
  &:active {
    border-color: ${({ theme }) => theme["--purple-800"]};
  }
`;

const CircleButtonLayout = styled.button`
  width: 56px;
  height: 56px;
  padding: 16px;
  border-radius: 50%;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme["--gray-500"]};

  &:hover {
    background-color: ${({ theme }) => theme["--gray-600"]};
  }
  &:active {
    background-color: ${({ theme }) => theme["--gray-700"]};
  }
  &:focus {
    outline: 1px solid ${({ theme }) => theme["--gray-800"]};
  }
`;

const buttonVariants = {
  primary: PrimaryButtonLayout,
  secondary: SecondaryButtonLayout,
  circle: CircleButtonLayout,
};
