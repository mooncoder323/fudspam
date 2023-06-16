import React, { useState } from "react";
import {
  Wrapper,
  Container,
  Nav,
  Item,
  NavItem,
  NavChildItems,
  Child,
} from "./style";
import classNames from "classnames";
import useSticky from "./useSticky";

const Navbar = () => {
  const { sticky, stickyRef } = useSticky();

  return (
    <Wrapper
      id="sticky-header"
      ref={stickyRef}
      className={classNames("nav flex", { sticky })}
      sticky={sticky}
    >
      <Container>
        <Nav>
          <Item>
            <NavItem key="1" to="/category/mailers/heart-sender/">
              Heart Sender
            </NavItem>
          </Item>
          <Item>
            <NavItem key="2" to="/category/private-software/">
              Private Software
            </NavItem>
            <NavChildItems>
              <Child key="1" to="/category/webmail-cracker/">
                Webmail Cracker
              </Child>
              <Child key="2" to="/category/software/email-sorter/">
                Email Sorter
              </Child>
              <Child key="3" to="/category/private-software/all-email-checker/">
                All Email Checker
              </Child>
              <Child key="4" to="/category/private-software/owa-email-sorrter/">
                Owa Email Sorter
              </Child>
              <Child
                key="5"
                to="/category/private-software/zimbra-email-sorter/"
              >
                Zimbra Email Sorter
              </Child>
              <Child
                key="6"
                to="/category/private-software/amazon-email-checker/"
              >
                Amazon Email Checker
              </Child>
              <Child
                key="7"
                to="/category/private-software/paypal-email-checker/"
              >
                Paypal Email Checker
              </Child>
              <Child key="8" to="/category/email-extractor/">
                Email Extractor
              </Child>
              <Child
                key="9"
                to="/category/private-software/chase-email-checker/"
              >
                Chase Email Checker
              </Child>
              <Child key="10" to="/category/email-verifier/">
                Email Verifier
              </Child>
              <Child
                key="11"
                to="/category/private-software/page-and-letter-encoder/"
              >
                Page and Letter Encoder
              </Child>
            </NavChildItems>
          </Item>
          <Item>
            <NavItem key="3" to="/category/scam-pages-1-2/">
              Scam Pages 1
            </NavItem>
            <NavChildItems>
              <Child
                key="1"
                to="/category/gmail-cookies-grab-page-bypass-2fa-security/"
              >
                Gmail Cookies Grab page – bypass 2fa security
              </Child>
              <Child key="2" to="/category/scam-pages-1-2/one-drive/">
                One drive
              </Child>
              <Child key="3" to="/category/scam-pages-1-2/apple/">
                Apple
              </Child>
              <Child key="4" to="/category/scam-pages-1-2/alibaba-scam-page/">
                Alibaba Scam Page
              </Child>
              <Child key="5" to="/category/scam-pages-1-2/excel/">
                Excel
              </Child>
              <Child key="6" to="/category/scam-pages-1-2/we-transfer/">
                We Transfer
              </Child>
              <Child key="7" to="/category/scam-pages-1-2/webmail-scam-page/">
                Webmail Scam page
              </Child>
              <Child key="8" to="/category/scam-pages-1-2/sharepoint/">
                Sharepoint
              </Child>
              <Child key="9" to="/category/scam-pages-1-2/amazon/">
                Amazon
              </Child>
              <Child key="10" to="/category/scam-pages-1-2/dropbox/">
                Dropbox
              </Child>
              <Child key="11" to="/category/scam-pages-1-2/outlook-scam-page/">
                Outlook Scam Page
              </Child>
              <Child key="12" to="/category/scam-pages-1-2/docusign/">
                Docusign
              </Child>
            </NavChildItems>
          </Item>
          <Item>
            <NavItem key="4" to="/category/scam-pages-2/">
              Scam Pages 2
            </NavItem>
            <NavChildItems>
              <Child key="1" to="/category/scam-pages-2/box-page-with-pdf/">
                Box page with pdf
              </Child>
              <Child key="2" to="/category/scam-pages-2/godaddy/">
                Godaddy
              </Child>
              <Child key="3" to="/category/scam-pages-2/aol/">
                Aol
              </Child>
              <Child key="4" to="/category/scam-pages-2/bank-scam-pages/">
                Bank Scam Pages
              </Child>
              <Child key="5" to="/category/scam-pages-1-2/outlook-scam-page/">
                Outlook Scam Page
              </Child>
              <Child key="6" to="/category/scam-pages-2/china-scam-pages/">
                China Scam pages
              </Child>
              <Child key="7" to="/category/scampages/adobe/">
                Adobe
              </Child>
              <Child key="8" to="/category/scam-pages-2/pdf-scam-page/">
                PDF Scam page
              </Child>
              <Child key="9" to="/category/scam-pages-2/office-365-scam-page/">
                Office 365 Scam page
              </Child>
              <Child key="10" to="/category/scam-pages-2/rackspace/">
                Rackspace
              </Child>
              <Child key="11" to="/category/scam-pages-2/yahoo/">
                Yahoo
              </Child>
            </NavChildItems>
          </Item>
          <Item>
            <NavItem key="5" to="/category/fud-link/">
              Fud Link
            </NavItem>
            <NavChildItems>
              <Child key="1" to="/category/fud-link-service/azure-fud-link/">
                Azure Fud Link
              </Child>
              <Child key="2" to="/category/fud-link-service/cpanel-fud-link/">
                Cpanel Fud Link
              </Child>  
            </NavChildItems>
          </Item>
          <Item>
            <NavItem key="6" to="/category/hacked-smtp/">
              Hacked SMTP
            </NavItem>
            <NavChildItems>
              <Child key="1" to="/category/hacked-smtp/rackspace-smtp/">
                Rackspace smtp
              </Child>
              <Child key="2" to="/category/hacked-smtp/ionos-smtp/">
                Ionos SMTP
              </Child>
              <Child key="3" to="/category/hacked-smtp/earth-link-smtp/">
                Earth link SMTP
              </Child>
              <Child key="4" to="/category/hacked-smtp/sendgrid-smtp/">
                Sendgrid Smtp
              </Child>
              <Child key="5" to="/category/hacked-smtp/strato-smtp/">
                Strato SMTP
              </Child>
              <Child key="6" to="/category/hacked-smtp/t-online-smtp/">
                T-online SMTP
              </Child>
              <Child key="7" to="/category/hacked-smtp/amazon-ses-smtp/">
                Amazon ses SMTP
              </Child>
              <Child key="8" to="/category/hacked-smtp/zimbra-webmail/">
                Zimbra webmail
              </Child>
              <Child key="7" to="/category/hacked-smtp/japan-smtp/">
                Japan Smtp
              </Child>
              <Child key="8" to="/category/hacked-smtp/alibaba-smtp/">
                Alibaba SMTP
              </Child>
            </NavChildItems>
          </Item>
          <Item>
            <NavItem key="7" to="/category/general-scampages/">
              General Scampages
            </NavItem>
          </Item>
          <Item>
            <NavItem key="8" to="/category/office-365-true-login/">
              Office 365 True Login
            </NavItem>
          </Item>
          <Item>
            <NavItem key="9" to="/category/antibot-system/">
              Antibot System
            </NavItem>
          </Item>
          <Item>
            <NavItem key="10" to="/category/rdp/">
              RDP
            </NavItem>
          </Item>
          <Item>
            <NavItem key="11" to="/category/bullet-proof-hosting/">
              Bullet Proof Hosting
            </NavItem>
          </Item>
          <Item>
            <NavItem key="12" to="/category/fud-letters/">
              Fud Letters
            </NavItem>
          </Item>
          <Item>
            <NavItem key="13" to="/category/php-mailer/">
              PHP Mailer
            </NavItem>
          </Item>
        </Nav>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
