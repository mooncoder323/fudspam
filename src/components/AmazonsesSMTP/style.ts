import styled from "styled-components";

export const AmazonsesSMTPWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AmazonsesSMTPContainer = styled.div`
  max-width: 1600px;
  width: 95%;
`;

export const AmazonsesSMTPContent = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    padding-top: 0px;
  }
`;
