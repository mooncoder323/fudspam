import React from "react";
import { Article, Sidebar, Category } from "../Components";
import {
  AlibabaScamPageWrapper,
  AlibabaScamPageContainer,
  AlibabaScamPageContent,
} from "./style";

const index = () => {
  return (
    <AlibabaScamPageWrapper>
      <AlibabaScamPageContainer>
        <AlibabaScamPageContent>
          <div>
            <Category title="Alibaba Scam Page" />
            <Article />
            <Article />
          </div>
          <Sidebar />
        </AlibabaScamPageContent>
      </AlibabaScamPageContainer>
    </AlibabaScamPageWrapper>
  );
};

export default index;
