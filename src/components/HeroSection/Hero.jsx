import React from "react";

import Header from "../Header/Header";
import Carousel from "./components/Carousel";
import styled from "styled-components";
import PlaneImg from "./components/PlaneImg";

const Hero = props => {
  return (
    <Container>
      <Header />
      {/* <Carousel /> */}
      {/* <PlaneImg /> */}
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  display: flex;

  justify-content: space-between;
  max-width: 1366px;
  // background-color: #ffffff;
  margin: 0 auto;

  // Experiment
  font-size: calc(10px + (19 - 10) * ((100vw - 360px) / (1920 - 360)));
`;
