import { useState } from "react";
import * as S from "./Input.style";

function Input({
  placeholder,
  onChange,
  label,
  errorMessage = "값을 입력해 주세요",
  ...rest
}) {
  const [isError, setIsError] = useState(false);

  const blurHandler = (e) => {
    if (!e.target.value.trim()) {
      setIsError(true);
    }
  };
  const focusHandler = () => {
    setIsError(false);
  };

  return (
    <>
      <S.InputWrapper>
        <S.Label>{label}</S.Label>
        <S.Input
          $isError={isError}
          placeholder={placeholder}
          onBlur={blurHandler}
          onFocus={focusHandler}
          onChange={onChange}
          {...rest}
        />
        {isError ? <S.ErrorMessage>{errorMessage}</S.ErrorMessage> : null}
      </S.InputWrapper>
    </>
  );
}

export default Input;
