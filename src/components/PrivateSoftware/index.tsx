import React from "react";
import {
  PrivateSoftwareWrapper,
  PrivateSoftwareContainer,
  PrivateSoftwareContent,
} from "./style";

import { Category, Article, Sidebar } from "../Components";

const index = () => {
  return (
    <PrivateSoftwareWrapper>
      <PrivateSoftwareContainer>
        <PrivateSoftwareContent>
          <div>
            <Category title="Private Software" />
            <Article />
            <Article />
          </div>
          <Sidebar />
        </PrivateSoftwareContent>
      </PrivateSoftwareContainer>
    </PrivateSoftwareWrapper>
  );
};

export default index;
