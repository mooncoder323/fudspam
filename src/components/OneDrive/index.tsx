import React from "react";
import { NotFound, Sidebar } from "../Components";
import {
  OneDriveWrapper,
  OneDriveContainer,
  OneDriveContent,
} from "./style";

const index = () => {
  return (
    <OneDriveWrapper>
      <OneDriveContainer>
        <OneDriveContent>
          <NotFound />
          <Sidebar />
        </OneDriveContent>
      </OneDriveContainer>
    </OneDriveWrapper>
  );
};

export default index;
