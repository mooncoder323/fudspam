import React from "react";
import { Sidebar } from "../Components";
import {
  GmailCookiesWrapper,
  GmailCookiesContainer,
  GmailCookiesContent,
} from "./style";

import { Category } from "../Components";

const index = () => {
  return (
    <GmailCookiesWrapper>
      <GmailCookiesContainer>
        <GmailCookiesContent>
          <Category title="Gmail Cookies Grab page – bypass 2fa security" />
          <Sidebar />
        </GmailCookiesContent>
      </GmailCookiesContainer>
    </GmailCookiesWrapper>
  );
};

export default index;
