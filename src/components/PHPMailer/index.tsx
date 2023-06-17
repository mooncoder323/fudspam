import React from "react";
import { Sidebar, Category, Article } from "../Components";
import {
  PHPMailerWrapper,
  PHPMailerContainer,
  PHPMailerContent,
} from "./style";

const index = () => {
  return (
    <PHPMailerWrapper>
      <PHPMailerContainer>
        <PHPMailerContent>
          <div>
            <Category title="PHP Mailer" />
            <Article />
            <Article />
          </div>
          <Sidebar />
        </PHPMailerContent>
      </PHPMailerContainer>
    </PHPMailerWrapper>
  );
};

export default index;
