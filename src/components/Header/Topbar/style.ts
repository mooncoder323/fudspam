import styled from "styled-components";

export const TopbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopbarContainer = styled.div`
  max-width: 1600px;
  width: 100%;
  padding: 0 5%;
`;

export const TopbarContent = styled.div`
  padding: 50px 0;
  margin-left: -10px;
`;

export const Content = styled.div`
  h4 {
    font-family: "Righteous", sans-serif;
    letter-spacing: 1px;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  div {
    font-family: "Roboto", sans-serif;
    font-size: 100%;
    line-height: 1.8;
    font-weight: 400;
  }
`;
