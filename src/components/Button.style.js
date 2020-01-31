import styled from "styled-components";

export const ButtonStyle = styled.button`
  /* z-index: 1; */
  background-image: url("https://3.bp.blogspot.com/-K8ntPBaliBg/Wh7_M0D9a9I/AAAAAAAABW8/p1HkYQdwJiA4nrgbTfhmGcO2cPb5_NhpwCLcBGAs/s1600/DO3JXL0V4AA1hwV.jpg");
  background-size: 200px;
  opacity: ${props => (props.opacity === 0 ? 0.9 : 0)};
  transition: opacity 0.5s;
  background-repeat: no-repeat;
  color: white;
  border: 1px solid grey;
  border-radius: 5%;
  width: 80%;
  max-width: 200px;
  max-height: 110px;
  margin: 0 auto;
  height: 20%;
  cursor: pointer;
`;

export const ButtonContainer = styled.section`
  display: flex;
  background-color: transparent;
  align-items: center;
  width: 100%;
  justify-content: center;
`;
