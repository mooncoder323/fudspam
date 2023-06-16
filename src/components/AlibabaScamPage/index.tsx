import React from "react";
import { Article, Sidebar } from "../Components";
import {
  AlibabaScamPageWrapper,
  AlibabaScamPageContainer,
  AlibabaScamPageContent,
} from "./style";

import { Category } from "../Components";

const index = () => {
  return (
    <AlibabaScamPageWrapper>
      <AlibabaScamPageContainer>
        <AlibabaScamPageContent>
          <Category title="Alibaba Scam Page" />
          <Sidebar />
        </AlibabaScamPageContent>
      </AlibabaScamPageContainer>
    </AlibabaScamPageWrapper>
  );
};

export default index;
