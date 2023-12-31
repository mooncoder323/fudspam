import styled from "styled-components";

export const TopbarWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TopbarContainer = styled.div`
  max-width: 1600px;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const TopbarContent = styled.div`
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
    transition: all 0.3s ease-in-out;
  }
  h4:hover {
    color: #f65002;
  }
  div {
    font-family: "Roboto", sans-serif;
    font-size: 100%;
    line-height: 1.8;
    font-weight: 400;
  }
`;
