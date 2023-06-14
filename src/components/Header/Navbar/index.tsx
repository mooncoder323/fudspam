import React from "react";
import { Wrapper, Container, Nav, NavItem } from "./style";
import classNames from "classnames";
import useSticky from "./useSticky";

const Navbar = () => {
  const { sticky, stickyRef } = useSticky();
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
  return (
    <nav
      ref={stickyRef}
      className={classNames("nav flex", { sticky })}
      style={{
        height: "80px",
        backgroundColor: "#9a9a9a",
        width: "100%",
        position: sticky ? "fixed" : "static",
        top: 0,
        zIndex: 999,
      }}
    >
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
    </nav>
  );
};

export default Navbar;
