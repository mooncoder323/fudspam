import styled from "styled-components";

export const FooterWrapper = styled.div`
  background: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  bottom: 0;
  right: 0;
  left: 0;
  position: relative;
`;
export const FooterContainer = styled.div`
  padding: 60px 0;
  max-width: 1600px;
  width: 90%;
  display: block;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
  }
`;
export const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 100%;
  line-height: 1.8;
  font-weight: 400;
  div {
    position: relative;
    width: 100%;
    span {
      font-size: 12px;
      color: #fff;
      line-height: 1.8;
      font-weight: 400;
      a {
        text-decoration: none;
        color: #f65002;
      }
    }
  }
`;
