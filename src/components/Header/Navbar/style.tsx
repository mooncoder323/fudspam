import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div<{ sticky: boolean }>`
  position: ${(props) => (props.sticky ? "fixed" : "static")};
  background-color: #1d242a;
  border-bottom: 3px solid #f65002;
  z-index: 999;
  top: 0;
  right: 0;
  left: 0;
  @media screen and (max-width: 1024px) {
    display: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 1600px;
  width: 95%;
`;

export const NavChildItems = styled.div`
  position: absolute;
  display: none;
  margin-top: 16px;
  z-index: 99;
  background: #1d242a;
  border: none !important;
  width: 250px;
  color: #999;
  text-align: left;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const NavItem = styled(Link)`
  padding: 18px;
  transition: all 0.3s ease-in-out;
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

export const Item = styled.div`
  padding: 18px 0;
  &:hover {
    ${NavChildItems} {
      display: block;
    }
  }
`;

export const Child = styled(Link)`
  border-right: 1px solid rgba(0, 0, 0, 0.5);
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  letter-spacing: 1px;
  display: block;
  line-height: 2;
  padding: 12px 20px;
  margin: 0;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #333;
  }
`;
