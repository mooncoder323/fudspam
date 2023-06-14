import React from "react";
import { HeaderContainer, HeaderWrapper, MobileMenu } from "./style";

import Topbar from "./Topbar";
import Navbar from "./Navbar";

function index() {
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

export default index;
