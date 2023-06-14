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
    <Wrapper
      id="sticky-header"
      ref={stickyRef}
      className={classNames("nav flex", { sticky })}
      sticky={sticky}
    >
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
