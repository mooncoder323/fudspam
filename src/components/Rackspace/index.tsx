import React from "react";
import {
  RackspaceWrapper,
  RackspaceContainer,
  RackspaceContent,
} from "./style";

import { Category, Article, Sidebar } from "../Components";

const index = () => {
  return (
    <RackspaceWrapper>
      <RackspaceContainer>
        <RackspaceContent>
          <div>
            <Category title="Rackspace smtp" />
            <Article />
            <Article />
          </div>
          <Sidebar />
        </RackspaceContent>
      </RackspaceContainer>
    </RackspaceWrapper>
  );
};

export default index;
