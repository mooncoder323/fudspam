import styled from "styled-components";

export const HeaderWrapper = styled.div``;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-center;
  justify-content: center;
  @media screen and (max-width: 1024px) {
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
