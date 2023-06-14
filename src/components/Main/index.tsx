import React from "react";
import Article from "./Article";
import Sidebar from "./Sidebar";

import { MainWrapper, MainContainer, MainContent } from "./style";

const index = () => {
  return (
    <MainWrapper>
      <MainContainer>
        <MainContent>
          <Article />
          <Sidebar />
        </MainContent>
      </MainContainer>
    </MainWrapper>
  );
};

export default index;
