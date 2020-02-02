import styled from "styled-components";

export const ButtonStyle = styled.button`
  background-image: url("https://3.bp.blogspot.com/-K8ntPBaliBg/Wh7_M0D9a9I/AAAAAAAABW8/p1HkYQdwJiA4nrgbTfhmGcO2cPb5_NhpwCLcBGAs/s1600/DO3JXL0V4AA1hwV.jpg");
  background-size: 180px;
  opacity: ${props => (props.modalVisibility ? 0 : 1)};
  z-index: ${props => (props.modalVisibility ? 0 : 1)};
  transition: opacity 0.5s ease-out;
  background-repeat: no-repeat;
  color: white;
  border: 1px solid grey;
  border-radius: 5%;
  width: 180px;
  min-width: 180px;
  height: 100px;
  border: none;
  &:hover {
    background: none;
  }
  transition: background 0.7s ease-in-out;
  cursor: pointer;
`;
