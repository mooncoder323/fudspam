import React from "react";
import {
  IonosSMTPWrapper,
  IonosSMTPContainer,
  IonosSMTPContent,
} from "./style";

import { Category, Article, Sidebar } from "../Components";

const index = () => {
  return (
    <IonosSMTPWrapper>
      <IonosSMTPContainer>
        <IonosSMTPContent>
          <div>
            <Category title="Hacked SMTP" />
            <Article />
            <Article />
            <Article />
          </div>
          <Sidebar />
        </IonosSMTPContent>
      </IonosSMTPContainer>
    </IonosSMTPWrapper>
  );
};

export default index;
