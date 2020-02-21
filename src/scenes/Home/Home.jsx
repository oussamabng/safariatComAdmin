<<<<<<< HEAD
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
=======
import React from 'react';
import ListCards from './components/ListCards/ListCards';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/HeroSection/Hero'
import HowItWork from './components/HowItWork/HowItWork';

const Home = () => {
    return (
        <div className="bg-white">
            <Hero  />
            <ListCards />
            <HowItWork />
            <Footer />
        </div>
    );
}
>>>>>>> 081bdd097f9322abf32ee9394b6c48bce142a882

export default Home;

const Container = styled.div`
  background-color: white;
`;
