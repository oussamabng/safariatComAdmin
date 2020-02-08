import React, { useState } from "react";
import styled from "styled-components";

import text from '../data';

import TopArrow from './components/TopArrow';
import CallToAction from "./components/CallToAction";
import DownArrow from "./components/DownArrow";
import Person from "./components/Person";
import Dot from "./components/Dot";
import BoxContainer from "./components/BoxContainer";



// ----------------------------------------------------------
// ////////////////////////////////////////////////////////////

const Carousel = props => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    const nextIndex = index + 1;

    nextIndex > 2 ? setIndex(0) : setIndex(nextIndex);
  };

  const next = () => {
    const nextIndex = index - 1;

    nextIndex < 0 ? setIndex(2) : setIndex(nextIndex);
  };

  const showPicture = () => {
    return index === 1 ? (
      <img src="men.png" alt="men"></img>
    ) : index === 2 ? (
      <img val={2} src="women.png" alt="women"></img>
    ) : null;
  };

  return (
    <Container className=" relative">
      
      

      <div className=" w-1/12">
        <Dot scale={index === 0 ? 1.25 : .875}  />
        <Dot scale={index === 1 ? 1.25 : .875}  />
        <Dot scale={index === 2 ? 1.25 : .875} className="-mb-8" />
      </div>

      <div className=" flex flex-col w-11/12  ">

        <a className="ml-40 self-start" onClick={next}>
          <TopArrow />
        </a>

        {text.map((el, i) => {
          if (index === i) {
            return (
              <BoxContainer 
              key={`box-${i}`} 
              title={el.title}
              subTitle={el.subTitle}
              text={el.text}
              index={index} />
              
            );
          }
        })}
        
        <a className="ml-40 self-start" onClick={prev}>
          <DownArrow />
        </a>

        
        <CallToAction />
      </div>
    </Container>
  );
};

export default Carousel;





const Container = styled.div`
  flex-basis:53%;
  flex-shrink:1;
  display: flex;
  justify-content: start;  
  align-items center;
  flex-direction: row;

  @media (max-width:1030px){
    margin:0 auto;
    flex-basis:80%;

  }

  
  @media (max-width:850px){
    margin:0 auto;
   flex-basis:95%;

  }


`;