import React from "react";
import { Sidebar, Category, Article } from "../Components";
import {
  Office365Wrapper,
  Office365Container,
  Office365Content,
} from "./style";

const index = () => {
  return (
    <Office365Wrapper>
      <Office365Container>
        <Office365Content>
          <div>
            <Category title="Office 365 True Login" />
            <Article />
          </div>
          <Sidebar />
        </Office365Content>
      </Office365Container>
    </Office365Wrapper>
  );
};

export default index;
