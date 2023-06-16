import React from "react";
import { Sidebar } from "../Components";
import {
  AdobeWrapper,
  AdobeContainer,
  AdobeContent,
} from "./style";

import { Category } from "../Components";

const index = () => {
  return (
    <AdobeWrapper>
      <AdobeContainer>
        <AdobeContent>
          <Category title="Adobe" />
          <Sidebar />
        </AdobeContent>
      </AdobeContainer>
    </AdobeWrapper>
  );
};

export default index;
