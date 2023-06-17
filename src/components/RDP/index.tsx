import React from "react";
import { Sidebar, Category, Article } from "../Components";
import { RDPWrapper, RDPContainer, RDPContent } from "./style";

const index = () => {
  return (
    <RDPWrapper>
      <RDPContainer>
        <RDPContent>
          <div>
            <Category title="RDP" />
            <Article />
            <Article />
          </div>
          <Sidebar />
        </RDPContent>
      </RDPContainer>
    </RDPWrapper>
  );
};

export default index;
