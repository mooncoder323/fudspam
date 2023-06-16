import React from "react";
import { MainWrapper, MainContainer, MainContent } from "./style";
import { Article, Sidebar } from "../../components/Components";

function Home() {
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
}

export default Home;
