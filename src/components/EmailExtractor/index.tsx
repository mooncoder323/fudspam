import React from "react";
import {
  EmailExtractorWrapper,
  EmailExtractorContainer,
  EmailExtractorContent,
} from "./style";

import { Category, Article, Sidebar } from "../Components";

const index = () => {
  return (
    <EmailExtractorWrapper>
      <EmailExtractorContainer>
        <EmailExtractorContent>
          <div>
            <Category title="Email Extractor" />
            <Article />
            <Article />
          </div>
          <Sidebar />
        </EmailExtractorContent>
      </EmailExtractorContainer>
    </EmailExtractorWrapper>
  );
};

export default index;
