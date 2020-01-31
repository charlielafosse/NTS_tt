import React from "react";
import { SubmitButton, InputField, Form } from "./Modal.style";

const Modal = ({ opacity }) => (
  <Form opacity={opacity}>
    <InputField placeholder="email address"></InputField>
    <SubmitButton>Submit</SubmitButton>
  </Form>
);

export default Modal;
