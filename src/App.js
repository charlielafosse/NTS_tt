import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import { Container } from "./App.style";
const App = () => (
  <Container>
    <Header></Header>
    <SignUp></SignUp>
    <Footer></Footer>
  </Container>
);

export default App;
