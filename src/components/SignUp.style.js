import styled, { keyframes } from "styled-components";

//-----------------------------

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-10px);
	}
	100% {
		transform: translatey(0px);
    }
`;

//------------------------------

export const ModalContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  width: 100%;
`;

export const PostcardContainer = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 450px;
  height: 300px;
  position: absolute;
  background: url("https://i.pinimg.com/originals/d2/1f/6e/d21f6ebf19ac377165a619b34853406d.jpg");
  background-repeat: no-repeat;
  background-size: 450px;
  @media (max-width: 768px) {
    width: 300px;
    height: 200px;
    background-size: 300px;
  }
  border-radius: 2px;
  z-index: ${props => (props.modalVisibility ? 1 : 0)};
  opacity: ${props => (props.modalVisibility ? 1 : 0)};
  transition: opacity 0.8s ease-out;
`;

export const PostcardImage = styled.img`
  width: 100%;
  margin-bottom: 15px;
  align-self: flex-end;
`;

export const Text = styled.p`
  font-size: 1.8rem;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  margin: 0 auto;
  letter-spacing: 0.15em;
  position: absolute;
  color: grey;
  animation: ${float} 2s ease-in-out infinite;
`;

//---------------------------

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
`;

export const ExitButton = styled.button`
  align-self: flex-end;
  font-size: 1.4rem;
  border: none;
  background-color: white;
  margin-top: 29px;
  margin-right: 18px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    color: red;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-top: 22px;
    margin-right: 11px;
  }
`;

export const ContactSpan = styled.span`
  font-size: 0.6rem;
  margin-left: 16px;
  color: black;
  padding-right: 5px;
  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const Label = styled.label`
  visibility: hidden;
`;

export const InputField = styled.input`
  font-family: "Cedarville Cursive", cursive;
  ::placeholder {
    color: ${props => (props.disabled ? "black" : "grey")};
    opacity: 1;
  }
  font-size: 0.8rem;
  padding-left: 4%;
  width: 80%;
  margin-right: 10px;
  font-weight: 200;
  border: 0;
  background-color: transparent;
  border-bottom: solid 0.05rem grey;
  @media (max-width: 768px) {
    font-size: 0.6rem;
    padding: 2%;
  }
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  font-family: "Cedarville Cursive", cursive;
  border-radius: 10%;
  font-size: 1.4rem;
  border: none;
  background-color: transparent;
  width: 40%;
  color: lightsteelblue;
  align-self: flex-end;
  &:hover {
    color: darkblue;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
