import React from "react";
import { Sidebar, Category, Article } from "../Components";
import { ZimbraWebmailWrapper, ZimbraWebmailContainer, ZimbraWebmailContent } from "./style";

const index = () => {
  return (
    <ZimbraWebmailWrapper>
      <ZimbraWebmailContainer>
        <ZimbraWebmailContent>
          <div>
            <Category title="Zimbra webmail" />
            <Article />
            <Article />
          </div>
          <Sidebar />
        </ZimbraWebmailContent>
      </ZimbraWebmailContainer>
    </ZimbraWebmailWrapper>
  );
};

export default index;
