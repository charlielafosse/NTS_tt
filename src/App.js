import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import { Container } from "./App.style";
const App = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <Container>
      <Header></Header>
      <SignUp
        setModalVisibility={setModalVisibility}
        modalVisibility={modalVisibility}
      ></SignUp>
      <Footer></Footer>
    </Container>
  );
};

export default App;
