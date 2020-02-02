import React from "react";
import { ButtonStyle } from "./Button.style";

const Button = ({ modalVisibility, setModalVisibility }) => (
  <ButtonStyle
    aria-label="click button to access the sign-up form"
    modalVisibility={modalVisibility}
    onClick={() => setModalVisibility(0.9)}
  ></ButtonStyle>
);

export default Button;
