import React from "react";
import { Sidebar } from "../Components";
import {
  HeartSenderWrapper,
  HeartSenderContainer,
  HeartSenderContent,
} from "./style";

import { Category, Article } from "../Components";

const index = () => {
  return (
    <HeartSenderWrapper>
      <HeartSenderContainer>
        <HeartSenderContent>
          <div>
            <Category title="Heart Sender" />
            <Article />
            <Article />
            <Article />
          </div>
          <Sidebar />
        </HeartSenderContent>
      </HeartSenderContainer>
    </HeartSenderWrapper>
  );
};

export default index;
