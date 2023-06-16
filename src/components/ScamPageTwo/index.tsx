import React from "react";
import { Sidebar } from "../Components";
import {
  ScamPageTwoWrapper,
  ScamPageTwoContainer,
  ScamPageTwoContent,
} from "./style";

import { Category } from "../Components";

const index = () => {
  return (
    <ScamPageTwoWrapper>
      <ScamPageTwoContainer>
        <ScamPageTwoContent>
          <Category title="Scam Pages 2" />
          <Sidebar />
        </ScamPageTwoContent>
      </ScamPageTwoContainer>
    </ScamPageTwoWrapper>
  );
};

export default index;
