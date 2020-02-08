import React from 'react'
import styled from "styled-components";




export default function PlaneImg() {
    return (
        <Container className="mr-20"/>
    )
}


const img = ({ className, children }) => (
    <img className={className} src="plane.png" alt="plane img">
      {children}
    </img>
  );
  
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
