import React from "react";
import {
  EmailSorterWrapper,
  EmailSorterContainer,
  EmailSorterContent,
} from "./style";

import { Category, Article, Sidebar } from "../Components";

const index = () => {
  return (
    <EmailSorterWrapper>
      <EmailSorterContainer>
        <EmailSorterContent>
          <div>
            <Category title="Email Sorter" />
            <Article />
            <Article />
          </div>
          <Sidebar />
        </EmailSorterContent>
      </EmailSorterContainer>
    </EmailSorterWrapper>
  );
};

export default index;
