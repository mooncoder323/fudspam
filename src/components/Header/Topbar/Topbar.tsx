import React from "react";
import { Link } from "react-router-dom";
import {
  TopbarWrapper,
  TopbarContainer,
  TopbarContent,
  Content,
} from "./style";

const Topbar = () => {
  return (
    <TopbarWrapper>
      <TopbarContainer>
        <TopbarContent>
          <Content>
            <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
              <h4>Fud Spam Tools Shop</h4>
            </Link>
            <div>
              Scampages, fud links, Spamming Tools, Bulletproof fud Link,
              Spamming Tool Shop, Fud pages
            </div>
          </Content>
        </TopbarContent>
      </TopbarContainer>
    </TopbarWrapper>
  );
};

export default Topbar;
