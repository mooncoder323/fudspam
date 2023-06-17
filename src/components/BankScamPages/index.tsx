import React from "react";
import { Sidebar, Category, Article } from "../Components";
import {
  BankScamPagesWrapper,
  BankScamPagesContainer,
  BankScamPagesContent,
} from "./style";

const index = () => {
  return (
    <BankScamPagesWrapper>
      <BankScamPagesContainer>
        <BankScamPagesContent>
          <div>
            <Category title="Bank Scam Pages" />
            <Article />
            <Article />
          </div>
          <Sidebar />
        </BankScamPagesContent>
      </BankScamPagesContainer>
    </BankScamPagesWrapper>
  );
};

export default index;
