import styled from "styled-components";

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
  span {
    width: 100%;
    color: red;
    height: 4px;
    border-radius: 8px;
    background: #fff;
  }
`;

export const MobileNav = styled.div<{ isClose: boolean }>`
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

export const MobileNavItem = styled.div`
  display: block;
  overflow: auto;
  text-align: left;
  margin: 0px;
  list-style: none;
  top: 30px;
  font-family: "Roboto", sans-serif;
  a {
    color: #f65002;
    display: block;
    padding: 11px 10px 11px 16px;
    border-bottom: 1px solid #f4f4f4;
    display: list-item;
    list-style: none;
    text-decoration: none;
  }
`;
