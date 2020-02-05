import React from "react";

import Hero from "../../components/HeroSection/Hero";
import Header from "../../components/Header/Header";
import styled from "styled-components";

const Container = styled.div`
  background-color: red;
`;

const Home = () => {
  return <Hero />;
};

{
  /* <Container>
      <Header />
      <Hero />
    </Container> */
}

export default Home;
