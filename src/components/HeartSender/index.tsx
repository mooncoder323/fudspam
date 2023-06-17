import React from "react";
import { Sidebar } from "../Components";
import {
  HeartSenderWrapper,
  HeartSenderContainer,
  HeartSenderContent,
} from "./style";

import { Category, ArticleCopy } from "../Components";
import HeartSender_img from '../../assets/images/heartsender.jpg'

const index = () => {
  return (
    <HeartSenderWrapper>
      <HeartSenderContainer>
        <HeartSenderContent>
          <div>
            <Category title="Heart Sender" />
            <ArticleCopy location={HeartSender_img} />
            <ArticleCopy location={HeartSender_img} />
            <ArticleCopy location={HeartSender_img} />
          </div>
          <Sidebar />
        </HeartSenderContent>
      </HeartSenderContainer>
    </HeartSenderWrapper>
  );
};

export default index;
