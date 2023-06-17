import React from "react";
import { AmazonsesSMTPWrapper, AmazonsesSMTPContainer, AmazonsesSMTPContent } from "./style";
import { Category, Article, Sidebar } from "../Components";

const index = () => {
  return (
    <AmazonsesSMTPWrapper>
      <AmazonsesSMTPContainer>
        <AmazonsesSMTPContent>
          <div>
            <Category title="Amazon ses SMTP" />
            <Article />
            <Article />
          </div>
          <Sidebar />
        </AmazonsesSMTPContent>
      </AmazonsesSMTPContainer>
    </AmazonsesSMTPWrapper>
  );
};

export default index;
