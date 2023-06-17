import React from "react";
import { Sidebar } from "../Components";
import {
  EncoderWrapper,
  EncoderContainer,
  EncoderContent,
} from "./style";

import { Category, Article } from "../Components";

const index = () => {
  return (
    <EncoderWrapper>
      <EncoderContainer>
        <EncoderContent>
          <div>
            <Category title="Page and Letter Encoder" />
            <Article />
            <Article />
            <Article />
          </div>
          <Sidebar />
        </EncoderContent>
      </EncoderContainer>
    </EncoderWrapper>
  );
};

export default index;
