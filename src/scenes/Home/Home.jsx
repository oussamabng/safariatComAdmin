import React from "react";
import ListCards from "./components/ListCards/ListCards";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/HeroSection/Hero";
import styled from "styled-components";

const Home = () => {
  return (
    <Container className="bg-white">
      <Hero />
      <ListCards />
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  background-color: white;
`;
