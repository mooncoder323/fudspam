import styled from "styled-components";

export const AlibabaScamPageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AlibabaScamPageContainer = styled.div`
  max-width: 1600px;
  width: 95%;
`;

export const AlibabaScamPageContent = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    padding-top: 0px;
  }
`;
