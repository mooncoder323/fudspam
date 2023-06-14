import React from "react";
import { FooterWrapper, FooterContainer, FooterContent } from "./style";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContent>
          <div>
            Copyright © 2023 Fud Spam Tools Shop. All Right Reserved.
            <br />
            <span>
              Theme :{" "}
              <a
                href="https://wordpress.org/themes/inx-game/"
                rel="nofollow"
              >
                Inx Game{" "}
              </a>
              theme By aThemeArt - Proudly powered by WordPress.
            </span>
          </div>
        </FooterContent>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
