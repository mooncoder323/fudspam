import React from "react";
import {
  ScamPageOneWrapper,
  ScamPageOneContainer,
  ScamPageOneContent,
} from "./style";

import { Category, Article, Sidebar } from "../Components";

const index = () => {
  return (
    <ScamPageOneWrapper>
      <ScamPageOneContainer>
        <ScamPageOneContent>
          <div>
            <Category title="Scam Pages 1" />
            <Article />
            <Article />
          </div>
          <Sidebar />
        </ScamPageOneContent>
      </ScamPageOneContainer>
    </ScamPageOneWrapper>
  );
};

export default index;
