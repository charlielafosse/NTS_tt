import styled, { keyframes } from "styled-components";

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

export const ModalContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  width: 100%;
`;

export const Text = styled.p`
  font-size: 1.8rem;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  margin: 0 auto;
  visibility: ${props => (props.modalVisibility ? "hidden" : "visible")};
  letter-spacing: 0.15em;
  position: absolute;
  color: grey;
  animation: ${float} 2s ease-in-out infinite;
`;
