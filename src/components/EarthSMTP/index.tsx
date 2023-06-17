import React from "react";
import {
  EarthSMTPWrapper,
  EarthSMTPContainer,
  EarthSMTPContent,
} from "./style";

import { Category, Article, Sidebar } from "../Components";

const index = () => {
  return (
    <EarthSMTPWrapper>
      <EarthSMTPContainer>
        <EarthSMTPContent>
          <div>
            <Category title="Earth link SMTP" />
            <Article />
            <Article />
          </div>
          <Sidebar />
        </EarthSMTPContent>
      </EarthSMTPContainer>
    </EarthSMTPWrapper>
  );
};

export default index;
