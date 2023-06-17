import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  /* max-width: 1600px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-center;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    /* padding-top: 30px; */
    width: 90%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: flex;
  }
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 60px;
  height: 50px;
  gap: 6px;
  background: #f65002;
  padding: 10px 15px;
  border-radius: 8px;
`;

export const MobileNav = styled.div<{ isClose: any }>`
  display: none;
  width: ${(props) => (props.isClose ? "232px" : "0")};
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 1024px) {
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    color: #999;
    background: #fff;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.25);
    z-index: 15;
    overflow: auto;
    text-align: left;
    list-style: none;
  }
`;
export const Cancel = styled.div`
  border: none;
  background: none;
  outline: none;
  position: absolute;
  z-index: 17;
  font-size: 54px;
  font-weight: 800;
  cursor: pointer;
  right: 20px;
  color: #f65002;
`;

export const Menu = styled.div`
  margin-top: 50px;
`;

export const MobileItem = styled.div``;

export const MobileNavItem = styled.div`
  display: block;
  overflow: auto;
  text-align: left;
  font-family: "Roboto", sans-serif;
  border-bottom: 1px solid #f4f4f4;
  a {
    color: #f65002;
    display: block;
    padding: 11px 10px 11px 16px;
    list-style: none;
    text-decoration: none;
    width: 85%;
  }
`;

export const MobileChildItems = styled.div``;
export const MobileChild = styled(Link)`
  display: block;
  border-bottom: 1px solid #f4f4f4;
  font-size: 14px;
  position: relative;
  padding: 4px 10px 4px 16px;
  color: #f65002;
  line-height: 1.8;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  span {
    margin-left: 10px;
  }
`;

export const DropDown = styled.div`
  color: #333;
  font-size: 20px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MobileNavLink = styled.div`
  display: flex;
  align-items: center;
`;
