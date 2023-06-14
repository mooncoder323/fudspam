import styled from "styled-components";

export const FooterWrapper = styled.div`
  background: #000;
  color: #fff;
    display: flex;
  justify-content: center;
  align-items: center;
`;
export const FooterContainer = styled.div`
  padding: 60px 5%;
  max-width: 1600px;
  width: 100%;
  display: block;
  justify-content: center;
  align-items: center ;
`;
export const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 100%;
  line-height: 1.8;
  font-weight: 400;
  div {
    flex: 0 0 50%;
    max-width: 50%;
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
