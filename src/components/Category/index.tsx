import React from "react";
import { CategoryWrapper } from "./style";

interface Props {
  title: string;
}

function index(props: Props) {
  return (
    <CategoryWrapper>
      <h1>
        Category: <span>{props.title}</span>
      </h1>
    </CategoryWrapper>
  );
}

export default index;
