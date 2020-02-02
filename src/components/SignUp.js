import React, { useState } from "react";
import Button from "./Button";
import {
  ExitButton,
  ModalContainer,
  SubmitButton,
  ContactSpan,
  InputField,
  Label,
  PostcardImage,
  PostcardContainer,
  Form,
  SendTo,
  Text
} from "./SignUp.style";

const SignUp = ({ modalVisibility, setModalVisibility }) => {
  const [textVisible, setTextVisible] = useState(false);
  console.log(textVisible);
  return (
    <ModalContainer>
      <PostcardContainer modalVisibility={modalVisibility}>
        <PostcardImage src="https://light-in-the-attic.s3.amazonaws.com/uploads/release_image/21053/image/large_550_tmp_2F1502227773602-ea8m23hyr5o-d9fd13beffa06caf972f6bfe5bf8d93b_2FNinePostcardsCoverFixed.jpg"></PostcardImage>
        <Form>
          <ExitButton type="button" onClick={() => setModalVisibility(0)}>
            X
          </ExitButton>
          <Label htmlFor="email">Email address</Label>
          <ContactSpan>
            dear:{" "}
            <InputField
              name="email"
              type="email"
              placeholder="NTS Radio"
              disabled
            ></InputField>
          </ContactSpan>
          <ContactSpan>
            from:{" "}
            <InputField
              name="email"
              type="email"
              placeholder="your email address"
            ></InputField>
          </ContactSpan>
          <SubmitButton onClick={() => setModalVisibility(0)} type="button">
            send
          </SubmitButton>
        </Form>
      </PostcardContainer>
      <Button
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
      ></Button>
      <Text>sign-up now</Text>
    </ModalContainer>
  );
};

export default SignUp;
