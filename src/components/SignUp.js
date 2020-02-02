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
  Text
} from "./SignUp.style";

const SignUp = ({ modalVisibility, setModalVisibility }) => {
  const [textVisible, setTextVisible] = useState(false);
  console.log(textVisible);
  return (
    <ModalContainer>
      <PostcardContainer modalVisibility={modalVisibility}>
        <PostcardImage
          alt="image of a postcard"
          src="https://light-in-the-attic.s3.amazonaws.com/uploads/release_image/21053/image/large_550_tmp_2F1502227773602-ea8m23hyr5o-d9fd13beffa06caf972f6bfe5bf8d93b_2FNinePostcardsCoverFixed.jpg"
        ></PostcardImage>
        <Form>
          <ExitButton
            aria-label="close the form"
            type="button"
            onClick={() => setModalVisibility(0)}
          >
            X
          </ExitButton>
          <ContactSpan>
            dear: <Label htmlFor="sendTo">Send to</Label>
            <InputField
              name="sendTo"
              id="sendTo"
              type="email"
              placeholder="NTS Radio"
              disabled
            ></InputField>
          </ContactSpan>
          <ContactSpan>
            from: <Label htmlFor="email">Email address</Label>
            <InputField
              name="email"
              id="email"
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
