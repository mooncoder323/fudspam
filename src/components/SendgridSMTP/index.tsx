import React from "react";
import { Sidebar, Category, Article } from "../Components";
import { SendgridSMTPWrapper, SendgridSMTPContainer, SendgridSMTPContent } from "./style";

const index = () => {
  return (
    <SendgridSMTPWrapper>
      <SendgridSMTPContainer>
        <SendgridSMTPContent>
          <div>
            <Category title="Sendgrid Smtp" />
            <Article />
            <Article />
          </div>
          <Sidebar />
        </SendgridSMTPContent>
      </SendgridSMTPContainer>
    </SendgridSMTPWrapper>
  );
};

export default index;
