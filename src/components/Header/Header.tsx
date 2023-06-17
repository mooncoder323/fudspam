import React, { useState } from "react";
import {
  HeaderContainer,
  HeaderWrapper,
  MobileMenu,
  MobileNav,
  Cancel,
  MobileNavItem,
  Menu,
  MobileItem,
  MobileChildItems,
  MobileChild,
  DropDown,
  MobileNavLink,
} from "./style";
import { Link } from "react-router-dom";

import Topbar from "./Topbar/Topbar";
import Navbar from "./Navbar/Navbar";
import {
  BiArrowBack,
  BiMenu,
  BiRightArrowAlt,
  BiDownArrowAlt,
  BiChevronRight,
} from "react-icons/bi";
import { BsXLg } from "react-icons/bs";

function Header() {
  const [isClose, setIsClose] = useState(false);
  const [isDropDown1, setIsDropDown1] = useState(false);
  const [isDropDown2, setIsDropDown2] = useState(false);
  const [isDropDown3, setIsDropDown3] = useState(false);
  const [isDropDown4, setIsDropDown4] = useState(false);
  const [isDropDown5, setIsDropDown5] = useState(false);

  const handleClose = () => {
    setIsClose(!isClose);
  };

  const handleDropDown1 = () => {
    setIsDropDown1(!isDropDown1);
  };
  const handleDropDown2 = () => {
    setIsDropDown2(!isDropDown2);
  };
  const handleDropDown3 = () => {
    setIsDropDown3(!isDropDown3);
  };
  const handleDropDown4 = () => {
    setIsDropDown4(!isDropDown4);
  };
  const handleDropDown5 = () => {
    setIsDropDown5(!isDropDown5);
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Topbar />
        <Navbar />
        <MobileMenu onClick={handleClose}>
          {isClose ? (
            <BiArrowBack
              style={{
                color: "#fff",
                width: "100%",
                fontSize: "54px",
                fontWeight: "800",
              }}
            />
          ) : (
            <BiMenu
              style={{
                color: "#fff",
                width: "100%",
                fontSize: "54px",
                fontWeight: "800",
              }}
            />
          )}
        </MobileMenu>
        <MobileNav isClose={isClose}>
          <Cancel onClick={handleClose}>
            <BsXLg
              style={{
                width: "100%",
                fontSize: "28px",
                fontWeight: "800",
              }}
            />
          </Cancel>
          <Menu>
            <MobileItem>
              <MobileNavItem key="1">
                <Link to="/category/mailers/heart-sender/">Heart Sender</Link>
              </MobileNavItem>
            </MobileItem>
            <MobileItem>
              <MobileNavItem key="2">
                <MobileNavLink>
                  <Link to="/category/private-software/">Private Software</Link>
                  <DropDown onClick={handleDropDown1}>
                    {isDropDown1 ? <BiDownArrowAlt /> : <BiRightArrowAlt />}
                  </DropDown>
                </MobileNavLink>
              </MobileNavItem>
              {isDropDown1 ? (
                <MobileChildItems>
                  <MobileChild key="1" to="/category/webmail-cracker/">
                    <BiChevronRight />
                    <span>Webmail Cracker</span>
                  </MobileChild>
                  <MobileChild key="2" to="/category/software/email-sorter/">
                    <BiChevronRight />
                    <span>Email Sorter</span>
                  </MobileChild>
                  <MobileChild
                    key="3"
                    to="/category/private-software/all-email-checker/"
                  >
                    <BiChevronRight />
                    <span>All Email Checker</span>
                  </MobileChild>
                  <MobileChild
                    key="4"
                    to="/category/private-software/owa-email-sorrter/"
                  >
                    <BiChevronRight />
                    <span>Owa Email Sorter</span>
                  </MobileChild>
                  <MobileChild
                    key="5"
                    to="/category/private-software/zimbra-email-sorter/"
                  >
                    <BiChevronRight />
                    <span>Zimbra Email Sorter</span>
                  </MobileChild>
                  <MobileChild
                    key="6"
                    to="/category/private-software/amazon-email-checker/"
                  >
                    <BiChevronRight />
                    <span>Amazon Email Checker</span>
                  </MobileChild>
                  <MobileChild
                    key="7"
                    to="/category/private-software/paypal-email-checker/"
                  >
                    <BiChevronRight />
                    <span>Paypal Email Checker</span>
                  </MobileChild>
                  <MobileChild key="8" to="/category/email-extractor/">
                    <BiChevronRight />
                    <span>Email Extractor</span>
                  </MobileChild>
                  <MobileChild
                    key="9"
                    to="/category/private-software/chase-email-checker/"
                  >
                    <BiChevronRight />
                    <span>Chase Email Checker</span>
                  </MobileChild>
                  <MobileChild key="10" to="/category/email-verifier/">
                    <BiChevronRight />
                    <span>Email Verifier</span>
                  </MobileChild>
                  <MobileChild
                    key="11"
                    to="/category/private-software/page-and-letter-encoder/"
                  >
                    <BiChevronRight />
                    <span>Page and Letter Encoder</span>
                  </MobileChild>
                </MobileChildItems>
              ) : null}
            </MobileItem>
            <MobileItem>
              <MobileNavItem key="3">
                <MobileNavLink>
                  <Link to="/category/scam-pages-1-2/">Scam Pages 1</Link>
                  <DropDown onClick={handleDropDown2}>
                    {isDropDown2 ? <BiDownArrowAlt /> : <BiRightArrowAlt />}
                  </DropDown>
                </MobileNavLink>
              </MobileNavItem>
              {isDropDown2 ? (
                <MobileChildItems>
                  <MobileChild
                    key="1"
                    to="/category/gmail-cookies-grab-page-bypass-2fa-security/"
                  >
                    <BiChevronRight />
                    <span>Gmail Cookies Grab page – bypass 2fa security</span>
                  </MobileChild>
                  <MobileChild key="2" to="/category/scam-pages-1-2/one-drive/">
                    <BiChevronRight />
                    <span>One drive</span>
                  </MobileChild>
                  <MobileChild key="3" to="/category/scam-pages-1-2/apple/">
                    <BiChevronRight />
                    <span>Apple</span>
                  </MobileChild>
                  <MobileChild
                    key="4"
                    to="/category/scam-pages-1-2/alibaba-scam-page/"
                  >
                    <BiChevronRight />
                    <span>Alibaba Scam Page</span>
                  </MobileChild>
                  <MobileChild key="5" to="/category/scam-pages-1-2/excel/">
                    <BiChevronRight />
                    <span>Excel</span>
                  </MobileChild>
                  <MobileChild
                    key="6"
                    to="/category/scam-pages-1-2/we-transfer/"
                  >
                    <BiChevronRight />
                    <span>We Transfer</span>
                  </MobileChild>
                  <MobileChild
                    key="7"
                    to="/category/scam-pages-1-2/webmail-scam-page/"
                  >
                    <BiChevronRight />
                    <span>Webmail Scam page</span>
                  </MobileChild>
                  <MobileChild
                    key="8"
                    to="/category/scam-pages-1-2/sharepoint/"
                  >
                    <BiChevronRight />
                    <span>Sharepoint</span>
                  </MobileChild>
                  <MobileChild key="9" to="/category/scam-pages-1-2/amazon/">
                    <BiChevronRight />
                    <span>Amazon</span>
                  </MobileChild>
                  <MobileChild key="10" to="/category/scam-pages-1-2/dropbox/">
                    <BiChevronRight />
                    <span>Dropbox</span>
                  </MobileChild>
                  <MobileChild
                    key="11"
                    to="/category/scam-pages-1-2/outlook-scam-page/"
                  >
                    <BiChevronRight />
                    <span>Outlook Scam Page</span>
                  </MobileChild>
                  <MobileChild key="12" to="/category/scam-pages-1-2/docusign/">
                    <BiChevronRight />
                    <span>Docusign</span>
                  </MobileChild>
                </MobileChildItems>
              ) : null}
            </MobileItem>
            <MobileItem>
              <MobileNavItem key="4">
                <MobileNavLink>
                  <Link to="/category/scam-pages-2/">Scam Pages 2</Link>
                  <DropDown onClick={handleDropDown3}>
                    {isDropDown3 ? <BiDownArrowAlt /> : <BiRightArrowAlt />}
                  </DropDown>
                </MobileNavLink>
              </MobileNavItem>
              {isDropDown3 ? (
                <MobileChildItems>
                  <MobileChild
                    key="1"
                    to="/category/scam-pages-2/box-page-with-pdf/"
                  >
                    <BiChevronRight />
                    <span>Box page with pdf</span>
                  </MobileChild>
                  <MobileChild key="2" to="/category/scam-pages-2/godaddy/">
                    <BiChevronRight />
                    <span>Godaddy</span>
                  </MobileChild>
                  <MobileChild key="3" to="/category/scam-pages-2/aol/">
                    <BiChevronRight />
                    <span>Aol</span>
                  </MobileChild>
                  <MobileChild
                    key="4"
                    to="/category/scam-pages-2/bank-scam-pages/"
                  >
                    <BiChevronRight />
                    <span>Bank Scam Pages</span>
                  </MobileChild>
                  <MobileChild
                    key="5"
                    to="/category/scam-pages-1-2/outlook-scam-page/"
                  >
                    <BiChevronRight />
                    <span>Outlook Scam Page</span>
                  </MobileChild>
                  <MobileChild
                    key="6"
                    to="/category/scam-pages-2/china-scam-pages/"
                  >
                    <BiChevronRight />
                    <span>China Scam pages</span>
                  </MobileChild>
                  <MobileChild key="7" to="/category/scampages/adobe/">
                    <BiChevronRight />
                    <span>Adobe</span>
                  </MobileChild>
                  <MobileChild
                    key="8"
                    to="/category/scam-pages-2/pdf-scam-page/"
                  >
                    <BiChevronRight />
                    <span>PDF Scam page</span>
                  </MobileChild>
                  <MobileChild
                    key="9"
                    to="/category/scam-pages-2/office-365-scam-page/"
                  >
                    <BiChevronRight />
                    <span>Office 365 Scam page</span>
                  </MobileChild>
                  <MobileChild key="10" to="/category/scam-pages-2/rackspace/">
                    <BiChevronRight />
                    <span>Rackspace</span>
                  </MobileChild>
                  <MobileChild key="11" to="/category/scam-pages-2/yahoo/">
                    <BiChevronRight />
                    <span>Yahoo</span>
                  </MobileChild>
                </MobileChildItems>
              ) : null}
            </MobileItem>
            <MobileItem>
              <MobileNavItem key="5">
                <MobileNavLink>
                  <Link to="/category/fud-link/">Fud Link</Link>
                  <DropDown onClick={handleDropDown4}>
                    {isDropDown4 ? <BiDownArrowAlt /> : <BiRightArrowAlt />}
                  </DropDown>
                </MobileNavLink>
              </MobileNavItem>
              {isDropDown4 ? (
                <MobileChildItems>
                  <MobileChild
                    key="1"
                    to="/category/fud-link-service/azure-fud-link/"
                  >
                    <BiChevronRight />
                    <span>Azure Fud Link</span>
                  </MobileChild>
                  <MobileChild
                    key="2"
                    to="/category/fud-link-service/cpanel-fud-link/"
                  >
                    <BiChevronRight />
                    <span>Cpanel Fud Link</span>
                  </MobileChild>
                </MobileChildItems>
              ) : null}
            </MobileItem>
            <MobileItem>
              <MobileNavItem key="6">
                <MobileNavLink>
                  <Link to="/category/hacked-smtp/">Hacked SMTP</Link>
                  <DropDown onClick={handleDropDown5}>
                    {isDropDown5 ? <BiDownArrowAlt /> : <BiRightArrowAlt />}
                  </DropDown>
                </MobileNavLink>
              </MobileNavItem>
              {isDropDown5 ? (
                <MobileChildItems>
                  <MobileChild
                    key="1"
                    to="/category/hacked-smtp/rackspace-smtp/"
                  >
                    <BiChevronRight />
                    <span>Rackspace smtp</span>
                  </MobileChild>
                  <MobileChild key="2" to="/category/hacked-smtp/ionos-smtp/">
                    <BiChevronRight />
                    <span>Ionos SMTP</span>
                  </MobileChild>
                  <MobileChild
                    key="3"
                    to="/category/hacked-smtp/earth-link-smtp/"
                  >
                    <BiChevronRight />
                    <span>Earth link SMTP</span>
                  </MobileChild>
                  <MobileChild
                    key="4"
                    to="/category/hacked-smtp/sendgrid-smtp/"
                  >
                    <BiChevronRight />
                    <span>Sendgrid Smtp</span>
                  </MobileChild>
                  <MobileChild key="5" to="/category/hacked-smtp/strato-smtp/">
                    <BiChevronRight />
                    <span>Strato SMTP</span>
                  </MobileChild>
                  <MobileChild
                    key="6"
                    to="/category/hacked-smtp/t-online-smtp/"
                  >
                    <BiChevronRight />
                    <span>T-online SMTP</span>
                  </MobileChild>
                  <MobileChild
                    key="7"
                    to="/category/hacked-smtp/amazon-ses-smtp/"
                  >
                    <BiChevronRight />
                    <span>Amazon ses SMTP</span>
                  </MobileChild>
                  <MobileChild
                    key="8"
                    to="/category/hacked-smtp/zimbra-webmail/"
                  >
                    <BiChevronRight />
                    <span>Zimbra webmail</span>
                  </MobileChild>
                  <MobileChild key="9" to="/category/hacked-smtp/japan-smtp/">
                    <BiChevronRight />
                    <span>Ionos SMTP</span>
                  </MobileChild>
                  <MobileChild
                    key="10"
                    to="/category/hacked-smtp/alibaba-smtp/"
                  >
                    <BiChevronRight />
                    <span>Alibaba SMTP</span>
                  </MobileChild>
                </MobileChildItems>
              ) : null}
            </MobileItem>
            <MobileItem>
              <MobileNavItem key="7">
                <Link to="/category/general-scampages/">General Scampages</Link>
              </MobileNavItem>
            </MobileItem>
            <MobileItem>
              <MobileNavItem key="8">
                <Link to="/category/office-365-true-login/">
                  Office 365 True Login
                </Link>
              </MobileNavItem>
            </MobileItem>
            <MobileItem>
              <MobileNavItem key="9">
                <Link to="/category/antibot-system/">Antibot System</Link>
              </MobileNavItem>
            </MobileItem>
            <MobileItem>
              <MobileNavItem key="10">
                <Link to="/category/rdp/">RDP</Link>
              </MobileNavItem>
            </MobileItem>
            <MobileItem>
              <MobileNavItem key="11">
                <Link to="/category/bullet-proof-hosting/">
                  Bullet Proof Hosting
                </Link>
              </MobileNavItem>
            </MobileItem>
            <MobileItem>
              <MobileNavItem key="12">
                <Link to="/category/fud-letters/">Fud Letters</Link>
              </MobileNavItem>
            </MobileItem>
            <MobileItem>
              <MobileNavItem key="13">
                <Link to="/category/php-mailer/">PHP Mailer</Link>
              </MobileNavItem>
            </MobileItem>
          </Menu>
        </MobileNav>
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
