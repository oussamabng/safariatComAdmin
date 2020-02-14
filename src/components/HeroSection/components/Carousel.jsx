import React, { useState } from "react";
import styled from "styled-components";

import text from "../data";

import TopArrow from "./components/TopArrow";
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

  return (
    <Container>
      <a className="arrow" onClick={next} href="#">
        <img className="TopArrow " src="TopArrow.svg" alt="top arrow" />
      </a>

      <h3 className="title">{text[index].title}</h3>
      <h5 className="subTitle"> {text[index].subTitle} </h5>

      <div className="carouselContent">
        <div className="dots">
          <span className={`dot ${index === 0 ? "bigDot" : ""} `}></span>
          <span className={`dot ${index === 1 ? "bigDot" : ""} `}></span>
          <span className={`dot ${index === 2 ? "bigDot" : ""} `}></span>
        </div>
        <p
          className={`text font-montserrat  ${
            index === 0 ? "textFull" : "textHalf"
          } `}
        >
          {text[index].text}
        </p>
        <div className="person">
          {index === 1 ? (
            <img className="men" src="men.png" alt="men"></img>
          ) : index === 2 ? (
            <img className="women" src="women.png" alt="women"></img>
          ) : (
            ""
          )}
        </div>
      </div>

      <a className="arrow" onClick={prev} href="#">
        <img className="DownArrow " src="DownArrow.svg" alt="top arrow" />
      </a>

      {/* 
      arrow top **
      title 
      subtitle 
      dots and text and images
      arrow down **
      buttons 
      */}
    </Container>
  );
};

export default Carousel;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 0.6rem;

  // Styling Carousel Content
  .carouselContent {
    display: flex;
    justify-content: flex-start;
    align-item: center;
    position: relative;

    padding-left: 2.1rem;
  }

  //Carousel Content text

  .title {
    font-size: 1.625rem;
    color: #167a91;
    font-weight: bold;
    opacity: 0.75;
  }

  .subTitle {
    font-size: 0.94rem;
    color: #ffb808;
    font-weight: bold;
    opacity: 0.72;
  }

  .text {
    font-weight: 400;
    font-size: 0.75rem;
    flex-basis: 14.8rem;
    z-index: 1;
    margin-left: 1.15rem;
    color: #838383;
    margin-top: 0.75rem;
  }

  .textFull {
    flex-basis: 13rem;
  }

  .textHalf {
    flex-basis: 10rem;
  }

  // Carousel Content Images
  .person {
    position: absolute;
    right: 0;
  }

  .women {
    flex-basis: 7.25rem;
    height: 10.4rem;
    top: 0;
    z-index: 0;
    margin-right: 4rem;
  }

  .men {
    flex-basis: 7.25rem;
    height: 10.4rem;
    transform: translateY(-25%);
    z-index: 0;
  }

  // ---------------------------------------
  // Styling Arrow
  .arrow {
    display: inline-block;
    width: 2.25rem;
    height: 2.25rem;
    cursor: pointer;
    z-index: 0;
  }

  .DownArrow {
    margin-top: 3.2rem;
  }

  // Styling Dot
  .dots {
    align-self: center;
  }
  .dot {
    display: block;
    height: 0.625rem;
    width: 0.625rem;
    background-color: #ffb808;
    border-radius: 50%;
    margin-top: 0.875rem;
  }

  .bigDot {
    width: 0.84rem;
    height: 0.84rem;
  }
`;
