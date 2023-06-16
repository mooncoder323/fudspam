import React from "react";
import { NotFound, Sidebar } from "../Components";
import { ExcelWrapper, ExcelContainer, ExcelContent } from "./style";

const index = () => {
  return (
    <ExcelWrapper>
      <ExcelContainer>
        <ExcelContent>
          <NotFound />
          <Sidebar />
        </ExcelContent>
      </ExcelContainer>
    </ExcelWrapper>
  );
};

export default index;
