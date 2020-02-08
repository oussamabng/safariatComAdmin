import React from 'react'
import styled from "styled-components";




export default function PlaneImg() {
    return (
        <Container />
    )
}


const img = ({ className, children }) => (
    <img className={className} src="plane.png" alt="plane img">
      {children}
    </img>
  );
  
  const Container = styled(img)`
    flex-basis:36vw;  
    height: 80vh;
    flex-shrink:3;

   
    @media (max-width: 1030px) {
      display:none;
    }

  `;
