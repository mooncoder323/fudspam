import React from "react";
import {
  HeaderContainer,
  HeaderWrapper,
  MobileMenu,
  MobileNav,
  Cancel,
  MobileNavItem,
} from "./style";
import { Link } from "react-router-dom";

import Topbar from "./Topbar/Topbar";
import Navbar from "./Navbar/Navbar";

const row = [
  "Heart Sender",
  "Private Software",
  "Scam Pages 1",
  "Scam Pages 2",
  "Fud Link",
  "Hacked SMTP",
  "General Scampages",
  "Office 365 True Login",
  "Antibot System",
  "RDP",
  "Bullet Proof Hosting",
  "Fud Letters",
  "PHP Mailer",
];

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
        <MobileNav>
          <Cancel>&times;</Cancel>
          {row.map((i, k) => (
            <MobileNavItem key={k}>
              <Link to={"#"}>{i}</Link>
            </MobileNavItem>
          ))}
        </MobileNav>
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
