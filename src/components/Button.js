import React from "react";
import { ButtonStyle } from "./Button.style";

const Button = ({ modalVisibility, setModalVisibility }) => (
  <ButtonStyle
    modalVisibility={modalVisibility}
    onClick={() => setModalVisibility(0.9)}
  ></ButtonStyle>
);

export default Button;
