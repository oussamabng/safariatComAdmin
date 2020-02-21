import React from "react";

import Header from "../Header/Header";
import Carousel from "./components/Carousel";
import styled from "styled-components";
import PlaneImg from "./components/PlaneImg";
<<<<<<< HEAD
=======
import CallToAction from "./components/components/CallToAction";


>>>>>>> 081bdd097f9322abf32ee9394b6c48bce142a882

const Hero = props => {
  return (
    <Container>
      {/* <img className="leftCloud" src="leftCloud.png" alt="cloud" /> */}
      <PlaneImg />
      <Carousel />
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 1366px;

  // background-color: #ffffff;
  margin: 0 auto;
  // position: relative;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-around;
  }

  @media (min-width: 1366px) {
    max-width: 1920px;
  }
`;
