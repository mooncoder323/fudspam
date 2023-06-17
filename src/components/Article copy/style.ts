import { Link } from "react-router-dom";
import styled from "styled-components";

export const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
  width: 100%;
  padding-bottom: 80px;
  @media screen and (max-width: 768px) {
    width: 100%;
    gap: 40px;
    padding-bottom: 0px;
  }
`;

export const ArticleContainer = styled.div`
  background-color: #fff;
`;

export const ArticleContent = styled.div``;

export const ImageBox = styled(Link)``;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
  padding-bottom: 25px;
  transition: all 0.3s ease-in-out;
  filter: brightness(100%);
  &:hover {
    filter: brightness(50%);
  }
`;

export const Post = styled.div`
  padding: 0px 25px 35px 25px;
`;

export const Title = styled.h2`
  padding-bottom: 20px;
  font-family: "Righteous", sans-serif;
  letter-spacing: 1px;
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
`;

export const TitleLink = styled(Link)`
  text-decoration: none;
  color: #000;
  transition: all 0.3s;
  &:hover {
    color: #f65002;
  }
`;

export const Meta = styled.div`
  margin-bottom: 30px;
  display: table;
`;
export const AvatarBox = styled.div`
  display: table-cell;
  padding-right: 20px;
`;
export const AvatarLink = styled(Link)``;
export const Avatar = styled.img`
  border-radius: 50%;
`;
export const PostMeta = styled.div`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: table-cell;
  vertical-align: middle;
`;

export const PostMetaLink = styled(Link)`
  color: #f65002;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  &:hover {
    color: #000;
  }
`;

export const PostBy = styled.div`
  display: block;
  font-size: 105%;
  font-weight: 500;
  padding-right: 30px;
  position: relative;
  line-height: 1;
  font-family: "Roboto", sans-serif;
  span,
  ${PostMetaLink} {
    font-family: "Roboto", sans-serif;
  }
`;

export const Date = styled.span``;

export const PostDate = styled.div`
  display: inline-block;
  font-size: 90%;
  padding-right: 30px;
  position: relative;
  line-height: 1;
  font-family: "Roboto", sans-serif;
  ${Date} {
    font-family: "Roboto", sans-serif;
  }
  ::after {
    content: "|";
    position: absolute;
    top: 0px;
    right: 15px;
  }
`;

export const Category = styled(Link)`
  color: #f65002;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  &:hover {
    color: #000;
  }
`;

export const PostCategory = styled.div`
  display: inline-block;
  font-size: 90%;
  margin-right: 0px;
  padding-right: 30px;
  position: relative;
  line-height: 1;
  font-family: "Roboto", sans-serif;
  ${Category} {
    font-family: "Roboto", sans-serif;
  }
`;

export const Like = styled(Link)``;

export const Content = styled.div`
  display: block;
  h1 {
    font-family: "Righteous", sans-serif;
    letter-spacing: 1px;
    text-align: center;
    font-size: 2rem;
    clear: both;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 0;
  }
  p {
    text-align: center;
    margin-bottom: 1.5em;
    margin-top: 0;
    font-family: "Roboto", sans-serif;
    font-size: 100%;
    line-height: 1.8;
    font-weight: 400;
  }
  p:nth-of-type(3) {
    text-align: left;
    strong {
      font-family: "Roboto", sans-serif;
      font-size: 100%;
      line-height: 1.8;
    }
  }
  ul {
    list-style: disc;
    margin-top: 0;
    margin-bottom: 1rem;
    display: block;
    padding-inline-start: 40px;
    li {
      display: list-item;
      font-family: "Roboto", sans-serif;
      font-size: 100%;
      line-height: 1.8;
      font-weight: 400;
    }
  }
  p:nth-of-type(4) {
    margin-bottom: 1.5em;
    margin-top: 0;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  p:nth-of-type(5) {
    text-align: center;
    margin-bottom: 1.5em;
    margin-top: 0;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    iframe {
      max-width: 100%;
      width: 560px;
      height: 315px;
      border-top-width: 0px;
      border-bottom-width: 0px;
      border-left-width: 0px;
      border-right-width: 0px;
      overflow-clip-margin: content-box !important;
      border-style: inset;
      border-color: initial;
      border-image: initial;
      overflow: clip !important;
    }
  }
  p:nth-of-type(6) {
    margin-bottom: 1.5em;
    margin-top: 0;
  }
  p:nth-of-type(7) {
    text-align: left;
  }
  p:nth-of-type(9) {
    text-align: center;
    margin-bottom: 1.5em;
    margin-top: 0;
    font-size: 100%;
    line-height: 1.8;
    font-weight: 400;
    strong,
    ${Like} {
      text-decoration: none;
      margin-bottom: 1.5em;
      font-family: "Roboto", sans-serif;
      color: #f65002;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: #000;
      }
    }
  }
`;
