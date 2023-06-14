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
    width: 95%;
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


export const MobileNav = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
    width: calc(232px);
    position: fixed;
    top: -56px;
    left: 0;
    padding: 72px 0 56px;
    bottom: -56px;
    color: #999;
    background: red;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.25);
    z-index: 15;
  }
`;
export const Cancel = styled.div``;
export const MobileNavItem = styled.div``;
