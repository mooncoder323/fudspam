import styled from "styled-components";

export const StratoSMTPWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StratoSMTPContainer = styled.div`
  max-width: 1600px;
  width: 95%;
`;

export const StratoSMTPContent = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    padding-top: 0px;
  }
`;
