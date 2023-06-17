import React from "react";
import { AlibabaSMTPWrapper, AlibabaSMTPContainer, AlibabaSMTPContent } from "./style";
import { Category, Article, Sidebar } from "../Components";

const index = () => {
  return (
    <AlibabaSMTPWrapper>
      <AlibabaSMTPContainer>
        <AlibabaSMTPContent>
          <div>
            <Category title="Alibaba SMTP" />
            <Article />
            <Article />
          </div>
          <Sidebar />
        </AlibabaSMTPContent>
      </AlibabaSMTPContainer>
    </AlibabaSMTPWrapper>
  );
};

export default index;
