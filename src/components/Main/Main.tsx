import React from "react";
import Article from "./Article/Article";
import Sidebar from "./Sidebar/Sidebar";

import { MainWrapper, MainContainer, MainContent, MainArticle } from "./style";

const Main = () => {
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

export default Main;
