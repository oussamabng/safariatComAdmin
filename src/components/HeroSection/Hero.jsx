import React from "react";

import Carousel from "./components/Carousel";
import styled from "styled-components";
import PlaneImg from "./components/PlaneImg";




const Hero = props => {
  return (
    <Container>
      <Carousel />
      <PlaneImg />
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
  padding: 2rem 0;
  
`;
