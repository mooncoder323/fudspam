import React from "react";
import { Sidebar } from "../Components";
import {
  ScamPageOneWrapper,
  ScamPageOneContainer,
  ScamPageOneContent,
} from "./style";

import { Category } from "../Components";

const index = () => {
  return (
    <ScamPageOneWrapper>
      <ScamPageOneContainer>
        <ScamPageOneContent>
          <Category title="Scam Pages 1" />
          <Sidebar />
        </ScamPageOneContent>
      </ScamPageOneContainer>
    </ScamPageOneWrapper>
  );
};

export default index;
