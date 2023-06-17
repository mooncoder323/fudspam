import React from "react";
import { Sidebar, Category, Article } from "../Components";
import {
  JapanSMTPWrapper,
  JapanSMTPContainer,
  JapanSMTPContent,
} from "./style";

const index = () => {
  return (
    <JapanSMTPWrapper>
      <JapanSMTPContainer>
        <JapanSMTPContent>
          <div>
            <Category title="Japan Smtp" />
            <Article />
          </div>
          <Sidebar />
        </JapanSMTPContent>
      </JapanSMTPContainer>
    </JapanSMTPWrapper>
  );
};

export default index;
