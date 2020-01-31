import styled from "styled-components";

export const ModalContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  padding: 4%;
  background-color: white;
  border-radius: 2%;
  margin: 0 auto;
  border: 0.5px solid grey;
  flex-direction: column;
  align-items: center;
  width: 40%;
  max-width: 200px;
  height: 80%;
  max-height: 280px;
  opacity: ${props => props.opacity};
  transition: opacity 0.5s;
`;

export const InputField = styled.input`
  font-size: 1.2rem;
  /* padding: 0.3rem; */
  padding: 2%;
  width: 90%;
  justify-self: center;
  /* max-width: 20rem; */
  font-family: Lato, sans-serif;
  font-weight: 200;
  border: 0;
  color: grey;
  align-self: center;
  border-bottom: solid 0.05rem grey;
  /* margin-bottom: 1.4rem; */
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  background-color: blue;
  width: 30%;
  height: 15%;
  justify-self: end;
`;
