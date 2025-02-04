import React from "react";
import StyledButton from "./Button.style";

function Button({ children, ...props }) {
  const { medium, outlineMedium, outlineSmall, large, outline, ...restProps } =
    props;
  return (
    <StyledButton
      $medium={medium}
      $outlineMedium={outlineMedium}
      $outlineSmall={outlineSmall}
      $large={large}
      $outline={outline}
      {...restProps}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
