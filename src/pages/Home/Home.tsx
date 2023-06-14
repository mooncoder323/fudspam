import React from "react";
import { Wrapper, Container } from "./style";
import { Header, Main, Footer } from "../../components/Components";

function Home() {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    </Wrapper>
  );
}

export default Home;
