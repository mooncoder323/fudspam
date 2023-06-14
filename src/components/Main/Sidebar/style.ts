import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarWrapper = styled.div`
  width: 25%;
`;
export const SidebarContainer = styled.div`
  padding-left: 25px;
`;

export const SidebarContent = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: block;
  width: 100%;
  background: #fff;
`;

export const SearchBox = styled.div`
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Search = styled.div`
  display: block;
  width: 100%;
  height: 40px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 33px;
  margin-bottom: 25px;
`;
export const SearchInput = styled.input`
  width: 75%;
  height: 100%;
  border: none;
  border-top-left-radius: 33px;
  border-bottom-left-radius: 33px;
  padding: 0 12px;
  font-size: 16px;
`;
export const SearchButton = styled.button`
  width: 25%;
  height: 100%;
  border-top-right-radius: 33px;
  border-bottom-right-radius: 33px;
  border: none;
  background-color: #f65002;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #f65002;
  }
`;

export const ContactBox = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Contact = styled.div`
  padding: 30px;
  h3 {
    font-family: "Righteous", sans-serif;
    letter-spacing: 1px;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.2;
    display: block;
    text-align: center;
    position: relative;
    margin: 25px;
  }
  p {
    text-align: center;
    padding: 10px;
  }
`;

export const RecentBox = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: block;
  padding: 20px;
  width: 100%;
  margin-top: -1px;
  background: #fff;
`;
export const RecentTilte = styled.h3`
  text-align: center;
  display: block;
  position: relative;
  margin-bottom: 25px;
  font-family: "Righteous", sans-serif;
  letter-spacing: 1px;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
`;
export const PostList = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;
export const Post = styled.li`
  list-style: none;
  display: block;
  border-bottom: solid 1px #eee;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
`;
export const PostLink = styled(Link)`
  font-weight: normal;
  display: block;
  color: #777;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-size: 100%;
  line-height: 1.8;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #f65002;
    padding-left: 15px;
  }
`;

export const TagBox = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: block;
  padding: 30px;
  width: 100%;
  margin-top: -1px;
  background: #fff;
`;
export const TagTitle = styled.h3`
  text-align: center;
  display: block;
  position: relative;
  margin-bottom: 25px;
  font-family: "Righteous", sans-serif;
  letter-spacing: 1px;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
`;
export const TagList = styled.div`
  a {
    text-decoration: none;
    color: #000;
    line-height: 1.8;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    padding: 2px;
  }
  a:hover {
    transition: all 0.3s ease-in-out;
    color: #f65002;
  }
`;
