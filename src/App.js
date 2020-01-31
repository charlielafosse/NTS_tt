import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { ModalContainer } from "./components/Modal.style";
import Button from "./components/Button";
import { Container } from "./App.style";

const App = () => {
  const [modalOpacity, setmodalOpacity] = useState(0);
  return (
    <Container>
      <Header></Header>
      <ModalContainer>
        <Modal opacity={modalOpacity}></Modal>
        <Button
          modalOpacity={modalOpacity}
          setmodalOpacity={setmodalOpacity}
        ></Button>
      </ModalContainer>
      <Footer></Footer>
    </Container>
  );
};

export default App;
