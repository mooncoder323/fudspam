import { styled } from "styled-components";

export const NotFoundWrapper = styled.div`
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const NotFoundContainer = styled.div``;
export const NotFoundContent = styled.div`
  h1 {
    font-family: "Righteous", sans-serif;
    letter-spacing: 1px;
    clear: both;
    font-size: 2rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 0;
  }
  div {
    margin: 1.5em 0 0;
    display: block;
    font-family: "Roboto", sans-serif;
    font-size: 100%;
    line-height: 1.8;
    font-weight: 400;
    p {
      margin-bottom: 20px;
      clear: both;
      margin-top: 0;
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }
  }
  form {
    display: block;
    margin-top: 0em;
    label {
      display: inline-block;
      margin-bottom: 0.5rem;
      cursor: default;
      span {
        border: 0;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute !important;
        width: 1px;
        word-wrap: normal !important;
      }
      input {
        color: #666;
        border: 1px solid #ccc;
        border-radius: 3px;
        width: 100%;
        min-height: 48px;
        padding: 5px 15px;
        font-size: 15px;
        margin-bottom: 25px;
      }
    }
    button {
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      padding: 9px 22px;
      font-family: "Roboto", sans-serif;
      color: #fff;
      background: #f65002;
      margin-top: 20px;
      font-size: 1rem;
      border: 1px solid #f65002;
      line-height: 1.5;
      border-radius: 3px;
      margin-left: 5px;
      @media screen and (max-width: 768px) {
        padding: 9px 10px;
      }
    }
  }
`;
