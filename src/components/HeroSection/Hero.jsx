import React from "react";

import Header from "../Header/Header";
import Carousel from "./components/Carousel";
import styled from "styled-components";
import PlaneImg from "./components/PlaneImg";

const Hero = props => {
  return (
    <Container>
      {/* <img className="rightCloud" src="cloudR.png" alt="right cloud" /> */}
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

  max-width: 1366px;

  // background-color: #ffffff;
  margin: 0 auto;
  position: relative;

  .rightCloud {
    position: absolute;
    // bottom: 47%;
    // left: 40%;
    transform: translate(42%, -23%);
    z-index: 0;
    opacity: 0.31;
  }

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-around;
  }

  @media (min-width: 1366px) {
    max-width: 1920px;
  }
`;
