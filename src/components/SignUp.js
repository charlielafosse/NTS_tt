import React, { useState } from "react";
import Button from "./Button";
import Postcard from "./Postcard";
import { ModalContainer, Text } from "./SignUp.style";

const SignUp = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <ModalContainer>
      <Postcard
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
      ></Postcard>
      <Button
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
      ></Button>
      <Text modalVisibility={modalVisibility}>sign-up now</Text>
    </ModalContainer>
  );
};

export default SignUp;
