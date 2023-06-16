import React from "react";
import { NotFound, Sidebar } from "../Components";
import { AppleWrapper, AppleContainer, AppleContent } from "./style";

const index = () => {
  return (
    <AppleWrapper>
      <AppleContainer>
        <AppleContent>
          <NotFound />
          <Sidebar />
        </AppleContent>
      </AppleContainer>
    </AppleWrapper>
  );
};

export default index;
