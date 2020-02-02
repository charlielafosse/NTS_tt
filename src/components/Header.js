import React from "react";

import { Logo, HeaderContainer, HeaderText } from "./Header.style";

const Header = () => (
  <HeaderContainer>
    <Logo
      alt="NTS logo inside an illustration of a head"
      src="https://i.pinimg.com/474x/94/f3/50/94f350859e7b8b2c68088e62933b9079.jpg"
    ></Logo>
    {/* <HeaderText>music for nine postcards</HeaderText> */}
  </HeaderContainer>
);

export default Header;
