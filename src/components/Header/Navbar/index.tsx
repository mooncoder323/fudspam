import React from "react";
import { Wrapper, Container, Nav, NavItem } from "./style";
import { Link } from "react-router-dom";

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

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <Nav>
            {row.map((i, k) => (
              <NavItem key={k} to="123">
                {i}
              </NavItem>
            ))}
          </Nav>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
