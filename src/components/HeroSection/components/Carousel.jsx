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
      <a className="arrow" onClick={next}>
        <img className="TopArrow " src="TopArrow.svg" alt="top arrow" />
      </a>

      <h3 className={`title ${index === 0 ? "" : "titleLeft"}`}>
        {text[index].title}
      </h3>
      <h5 className="subTitle"> {text[index].subTitle} </h5>

      <div className="carouselContent">
        <div className="dots">
          <span className={`dot ${index === 0 ? "bigDot" : ""} `}></span>
          <span className={`dot ${index === 1 ? "bigDot" : ""} `}></span>
          <span className={`dot ${index === 2 ? "bigDot" : ""} `}></span>
        </div>
        <p
          className={`text font-montserrat  ${
            index === 0 ? "textFull" : index === 1 ? "textMen" : "textWomen"
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

      <a className="arrow" onClick={prev}>
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

    max-width: 22.875rem;

    @media (min-width: 768px) {
      flex: 1 1 auto;

      max-width: calc(380px + (500 - 380) * ((100vw - 768px) / (1024 - 768)));
    }

    @media (min-width: 1024px) {
      flex: 1 1 auto;
      max-width: calc(500px + (630 - 500) * ((100vw - 1024px) / (1336 - 1024)));
      padding-left: 3.4rem;
    }

    @media (min-width: 1336px) {
      flex: 1 1 auto;
      max-width: calc(627px + (750 - 627) * ((100vw - 1366px) / (1920 - 1366)));
      padding-left: 3.4rem;
    }
  }

  //Carousel Content text

  .title {
    font-size: 1.625rem;
    color: #167a91;
    font-weight: bold;
    opacity: 0.75;

    @media (min-width: 768px) {
      font-size: calc(26px + (50 - 26) * ((100vw - 768px) / (1920 - 768)));
    }
  }

  .titleLeft {
    @media (min-width: 768px) {
      width: 73%;
    }
  }

  .subTitle {
    font-size: 0.94rem;
    color: #ffb808;
    font-weight: bold;
    opacity: 0.72;

    @media (min-width: 768px) {
      font-size: calc(15px + (28 - 15) * ((100vw - 768px) / (1920 - 768)));
    }
  }

  .text {
    font-weight: 400;
    font-size: 0.75rem;
    // font-size: calc(0.75rem + (24 - 0.75) * ((100vw - 360px) / (1920 - 360)));

    z-index: 1;
    margin-left: 1.15rem;
    color: #838383;
    margin-top: 0.75rem;

    @media (min-width: 1024px) {
      font-size: calc(12px + (24 - 12) * ((100vw - 768px) / (1920 - 768)));
    }
  }

  .textFull {
    flex-basis: 13rem;

    @media (min-width: 768px) {
      flex-basis: calc(208px + (768 - 208) * ((100vw - 768px) / (1920 - 768)));
    }
  }

  .textWomen {
    flex-basis: 10rem;

    @media (min-width: 768px) {
      flex-basis: calc(166px + (270 - 166) * ((100vw - 768px) / (1024 - 768)));
    }

    @media (min-width: 1024px) {
      flex-basis: calc(
        270px + (500 - 270) * ((100vw - 1024px) / (1920 - 1024))
      );
    }
  }

  .textMen {
    flex-basis: 10rem;

    @media (min-width: 768px) {
      flex-basis: calc(166px + (250 - 166) * ((100vw - 768px) / (1024 - 768)));
    }

    @media (min-width: 1024px) {
      flex-basis: calc(
        250px + (500 - 250) * ((100vw - 1024px) / (1920 - 1024))
      );
    }
  }

  // Carousel Content Images
  .person {
    position: absolute;
    right: 0;
  }

  .women {
    // flex-basis: 4.25rem;
    height: 7.5rem;
    top: 50;
    z-index: 0;
    margin-right: 4rem;

    @media (min-width: 768px) {
      height: calc(120px + (220 - 120) * ((100vw - 768px) / (1920 - 768)));
    }
  }

  .men {
    // flex-basis: 7.25rem;
    height: 9.4rem;
    transform: translateY(-23%);
    z-index: 0;

    @media (min-width: 768px) {
      height: calc(150px + (315 - 150) * ((100vw - 768px) / (1920 - 768)));
    }
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
