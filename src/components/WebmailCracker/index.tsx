import React from "react";
import { Sidebar, Category, Article } from "../Components";
import { WebmailCrackerWrapper, WebmailCrackerContainer, WebmailCrackerContent } from "./style";

const index = () => {
  return (
    <WebmailCrackerWrapper>
      <WebmailCrackerContainer>
        <WebmailCrackerContent>
          <div>
            <Category title="Webmail Cracker" />
            <Article />
            <Article />
          </div>
          <Sidebar />
        </WebmailCrackerContent>
      </WebmailCrackerContainer>
    </WebmailCrackerWrapper>
  );
};

export default index;
