import React from "react";
import styled from "styled-components";

const small = "images/Plane/planeMobile.png";
const medium = "images/Plane/plane-1.png";
const large = "images/Plane/plane-2.png";

const clientWidth = document.querySelector("html").clientWidth;

const PlaneImg = () => {
  return (
    <Container>
      {clientWidth <= 1024 ? (
        <img src={small} alt="plane image" />
      ) : clientWidth < 1920 ? (
        <img src={medium} alt="plane image" />
      ) : (
        <img src={large} alt="plane image" />
      )}
    </Container>
  );
};

export default PlaneImg;

const Container = styled.div`
  padding-top: 2rem;
`;
