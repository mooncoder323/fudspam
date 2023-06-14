import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: #1d242a;
  border-bottom: 3px solid #f65002;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1600px;
  width: 100%;
  padding: 0 5%;
  margin-left: -20px;
`;

export const Menu = styled.ul`
  display: flex;
  a {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 16px;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
    letter-spacing: 1px;
    display: block;
    padding: 18px;
    line-height: 1.4;
    position: relative;
    border-right: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const NavItem = styled(Link)`
  padding: 18px;
  transition: all 0.3s;
  line-height: 1.4;
  position: relative;
  &:first-child {
    border-right: 1px solid rgba(0, 0, 0, 0.5);
  }
  &:not(:first-child) {
    border-right: 1px solid rgba(0, 0, 0, 0.5);
  }
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  letter-spacing: 1px;
  &:hover {
    background-color: #f65002;
  }
`;
