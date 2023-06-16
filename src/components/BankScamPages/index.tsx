import React from "react";
import { Sidebar } from "../Components";
import {
  BankScamPagesWrapper,
  BankScamPagesContainer,
  BankScamPagesContent,
} from "./style";

import { Category } from "../Components";

const index = () => {
  return (
    <BankScamPagesWrapper>
      <BankScamPagesContainer>
        <BankScamPagesContent>
          <Category title="Bank Scam Pages" />
          <Sidebar />
        </BankScamPagesContent>
      </BankScamPagesContainer>
    </BankScamPagesWrapper>
  );
};

export default index;
