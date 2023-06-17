import React from "react";
import { Sidebar, Category, Article } from "../Components";
import { TonlineSMTPWrapper, TonlineSMTPContainer, TonlineSMTPContent } from "./style";

const index = () => {
  return (
    <TonlineSMTPWrapper>
      <TonlineSMTPContainer>
        <TonlineSMTPContent>
          <div>
            <Category title="T-online SMTP" />
            <Article />
            <Article />
          </div>
          <Sidebar />
        </TonlineSMTPContent>
      </TonlineSMTPContainer>
    </TonlineSMTPWrapper>
  );
};

export default index;
