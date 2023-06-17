import React from "react";
import { Sidebar, Category, Article } from "../Components";
import {
  ScamPageTwoWrapper,
  ScamPageTwoContainer,
  ScamPageTwoContent,
} from "./style";

const index = () => {
  return (
    <ScamPageTwoWrapper>
      <ScamPageTwoContainer>
        <ScamPageTwoContent>
          <div>
            <Category title="Scam Pages 2" />
            <Article />
            <Article />
          </div>
          <Sidebar />
        </ScamPageTwoContent>
      </ScamPageTwoContainer>
    </ScamPageTwoWrapper>
  );
};

export default index;
