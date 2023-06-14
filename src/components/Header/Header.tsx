import React from "react";
import { HeaderContainer, HeaderWrapper, MobileMenu } from "./style";

import Topbar from "./Topbar/Topbar";
import Navbar from "./Navbar/Navbar";

function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Topbar />
        <Navbar />
        <MobileMenu>
          <span></span>
          <span></span>
          <span></span>
        </MobileMenu>
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
