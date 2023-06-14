import React from "react";
import Article from "./Article";
import Sidebar from "./Sidebar";

import { MainWrapper, MainContainer, MainContent, MainArticle } from "./style";

const index = () => {
  return (
    <MainWrapper>
      <MainContainer>
        <MainContent>
          <MainArticle>
            <Article />
            <Article />
          </MainArticle>
          <Sidebar />
        </MainContent>
      </MainContainer>
    </MainWrapper>
  );
};

export default index;
