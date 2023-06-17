import { styled } from "styled-components";

export const CategoryWrapper = styled.div`
  background: #fff;
  padding: 30px;
  margin-bottom: 50px;
  display: block;
  h1 {
    display: block;
    font-family: "Righteous", sans-serif;
    letter-spacing: 1px;
    clear: both;
    font-size: 2rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    span {
      font-family: "Righteous", sans-serif;
      letter-spacing: 1px;
      font-weight: 500;
      line-height: 1.2;
    }
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;
