import React from "react";
import { Sidebar } from "../Components";
import {
  EmailVerifierWrapper,
  EmailVerifierContainer,
  EmailVerifierContent,
} from "./style";

import { Category, Article } from "../Components";

const index = () => {
  return (
    <EmailVerifierWrapper>
      <EmailVerifierContainer>
        <EmailVerifierContent>
          <div>
            <Category title="Email Verifier" />
            <Article />
            <Article />
            <Article />
          </div>
          <Sidebar />
        </EmailVerifierContent>
      </EmailVerifierContainer>
    </EmailVerifierWrapper>
  );
};

export default index;
