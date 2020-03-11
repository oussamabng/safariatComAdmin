import React from "react";
import styled from "styled-components";

const small = "images/Plane/planeMobile.png";
const medium = "images/Plane/plane-1.png";
const large = "images/Plane/plane-2.png";

const clientWidth = document.querySelector("html").clientWidth;

const PlaneImg = () => {
  return (
    <Container>
      {clientWidth <= 767 ? (
        <img src={small} className="imgSmall" alt="plane image" />
      ) : clientWidth < 1920 ? (
        <img src={medium} className="imgMedium" alt="plane image" />
      ) : (
        <img src={large} className="imgLarge" alt="plane image" />
      )}
    </Container>
  );
<<<<<<< HEAD
  
  const Container = styled(img)`
    
  @media (min-width: 100px) {
    // display:block;
  max-width:38vw;  
    margin:0 auto;
  }

   
  @media (min-width: 768px) {
      // display:block;
    max-width:34vw;  
      margin:0 auto;
    }

    @media (min-width:1024px){
      flex-basis:36vw;  
      height: 80vh;
      flex-shrink:3;
    
    }
   
    
    

  `;
=======
};

export default PlaneImg;

const Container = styled.div`
  z-index: 1;
  padding-top: 2rem;
  max-width: 270px;
  .imgSmall {
    width: 240px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 300px;
  }

  @media (min-width: 1024px) and (max-width: 1366px) {
    max-width: 440px;
    margin-top: 3rem;
  }

  @media (min-width: 1367px) and (max-width: 1920px) {
    max-width: 820px;
  }
`;
>>>>>>> 54889d2f5fd443ece58c758ecba7457df998a2cc
