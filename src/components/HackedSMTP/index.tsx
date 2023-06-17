import React from "react";
import {
  HackedSMTPWrapper,
  HackedSMTPContainer,
  HackedSMTPContent,
} from "./style";

import { Category, Article, Sidebar } from "../Components";

const index = () => {
  return (
    <HackedSMTPWrapper>
      <HackedSMTPContainer>
        <HackedSMTPContent>
          <div>
            <Category title="Hacked SMTP" />
            <Article />
            <Article />
            <Article />
          </div>
          <Sidebar />
        </HackedSMTPContent>
      </HackedSMTPContainer>
    </HackedSMTPWrapper>
  );
};

export default index;
