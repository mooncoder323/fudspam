import React from "react";
import { HeaderContainer, HeaderWrapper } from "./style";

import Topbar from "./Topbar";
import Navbar from "./Navbar";

function index() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Topbar />
        <nav style={{ position: "sticky", top: 0, zIndex: 1 }}>
          <Navbar />
        </nav>
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default index;
