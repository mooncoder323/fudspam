import React from "react";
import { AntiBotWrapper, AntiBotContainer, AntiBotContent } from "./style";
import { Category, Article, Sidebar } from "../Components";

const index = () => {
  return (
    <AntiBotWrapper>
      <AntiBotContainer>
        <AntiBotContent>
          <div>
            <Category title="Antibot system" />
            <Article />
            <Article />
          </div>
          <Sidebar />
        </AntiBotContent>
      </AntiBotContainer>
    </AntiBotWrapper>
  );
};

export default index;
