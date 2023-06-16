import React from "react";
import { CategoryWrapper, CategoryContainer, CategoryContent } from "./style";
import { Article } from "../Components";

interface Props {
  title: string;
}

function index(props: Props) {
  return (
    <CategoryWrapper>
      <CategoryContainer>
        <CategoryContent>
          <h1>
            Category: <span>{props.title}</span>
          </h1>
        </CategoryContent>
        <Article />
      </CategoryContainer>
    </CategoryWrapper>
  );
}

export default index;
