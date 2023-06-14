import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.div`
  max-width: 1600px;
  width: 95%;
`;

export const MainContent = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

export const MainArticle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
  width: 75%;
  @media screen and (max-width: 1200px) {
    width: 70%;
  }
`;
