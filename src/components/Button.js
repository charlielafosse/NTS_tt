import React from "react";
import { ButtonContainer, ButtonStyle } from "./Button.style";

const Button = ({ modalOpacity, setmodalOpacity }) => (
  //   <ButtonContainer>
  <ButtonStyle
    opacity={modalOpacity}
    onClick={() => setmodalOpacity(modalOpacity === 0.9 ? 0 : 0.9)}
  >
    {modalOpacity}
  </ButtonStyle>
  //   </ButtonContainer>
);

export default Button;
