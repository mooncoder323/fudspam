import React from "react";
import {
  GmailCookiesWrapper,
  GmailCookiesContainer,
  GmailCookiesContent,
} from "./style";

import { Category, Article, Sidebar } from "../Components";

const index = () => {
  return (
    <GmailCookiesWrapper>
      <GmailCookiesContainer>
        <GmailCookiesContent>
          <div>
            <Category title="Gmail Cookies Grab page – bypass 2fa security" />
            <Article />
            <Article />
          </div>
          <Sidebar />
        </GmailCookiesContent>
      </GmailCookiesContainer>
    </GmailCookiesWrapper>
  );
};

export default index;
