import React from "react";
import { Sidebar, Category, Article } from "../Components";
import { AdobeWrapper, AdobeContainer, AdobeContent } from "./style";

const index = () => {
  return (
    <AdobeWrapper>
      <AdobeContainer>
        <AdobeContent>
          <div>
            <Category title="Adobe" />
            <Article />
            <Article />
          </div>
          <Sidebar />
        </AdobeContent>
      </AdobeContainer>
    </AdobeWrapper>
  );
};

export default index;
