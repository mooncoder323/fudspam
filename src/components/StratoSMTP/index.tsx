import React from "react";
import { Sidebar, Category, Article } from "../Components";
import { StratoSMTPWrapper, StratoSMTPContainer, StratoSMTPContent } from "./style";

const index = () => {
  return (
    <StratoSMTPWrapper>
      <StratoSMTPContainer>
        <StratoSMTPContent>
          <div>
            <Category title="Strato SMTP" />
            <Article />
            <Article />
          </div>
          <Sidebar />
        </StratoSMTPContent>
      </StratoSMTPContainer>
    </StratoSMTPWrapper>
  );
};

export default index;
