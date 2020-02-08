import React from "react";

import Carousel from "./components/Carousel";
// import CallToAction from "./components/components/CallToAction";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  background-color: #ffffff;
  margin: 0 auto;
  padding: 2% 5%;
`;

const img = ({ className, children }) => (
  <img className={className} src="plane.png" alt="plane img">
    {children}
  </img>
);

const StyledImg = styled(img)`
  display: block;
  max-width: 44%;
  max-height: 40%;
`;

const Hero = props => {
  return (
    <Container>
      <Carousel />

      <StyledImg />
    </Container>
  );
};

export default Hero;
