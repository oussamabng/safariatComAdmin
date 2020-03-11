import React from "react";

import Carousel from "./components/Carousel";
import styled from "styled-components";
import PlaneImg from "./components/PlaneImg";

const Hero = props => {
  return (
    <Container>
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
