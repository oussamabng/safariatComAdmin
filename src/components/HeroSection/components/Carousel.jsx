import React, { useState } from "react";
import styled from "styled-components";

import CallToAction from "./components/CallToAction";

const TopArrow = ({ className, children }) => (
  <img className={className} src="TopArrow.svg" alt="top arrow">
    {children}
  </img>
);

const DownArrow = ({ className, children }) => (
  <img className={className} src="DownArrow.svg" alt="top arrow">
    {children}
  </img>
);

const Dot = styled.span`
  height: ${props => props.scale}px;
  width: ${props => props.scale}px;
  background-color: #ffb808;
  border-radius: 50%;
  display: block;
`;

const StyledTopArrow = styled(TopArrow)`
  max-width: 50px;
  max-height: 50px;
  cursor: pointer;
  margin-bottom: 1.5rem;
`;

const StyledDownArrow = styled(DownArrow)`
  max-width: 50px;
  max-height: 50px;
  cursor: pointer;
  margin-top: 2.5rem;
  margin-bottom: 2rem;
`;

const Container = styled.div`
  flex-basis:70%;
  display: flex;
  justify-content: start;  
  align-items center;
  flex-direction: row;
`;

const Img = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const StyledImg = styled(Img)`
  width: 265px;
  height: 208px;
  position: absolute;
  bottom: ${props => props.b}%;
  right: ${props => props.r}%;
  z-index: 0;
`;

// Carousel Boxes
const text = [
  {
    title: "A business Travel Platform",
    subTitle: "with multiple services",
    text: `our website is an algerian platform that gives service
for business travel angencies , and provide for people
an easy way to travel , our website will digitalized
everything to make it close and easy for you.`,
    index: 0
  },
  {
    title: "Travel Agency App",
    subTitle: "a managing service",
    text: `by using our platform, travel agencies will 
have everything they need to manage
and automatetheir businesses in an
easy, smooth and professional way. `,
    index: 1,
    img: "men.png"
  },
  {
    title: "People 's travel app",
    subTitle: "a partner for your tours",
    text: `in our platform travellers they will also find
everything they need, by browsing travel 
products and tours, and share their stories 
and experiences in such an easy way.`,
    index: 2,
    img: "women.png"
  }
];

const BoxContainer = ({ className, children }) => (
  <div className={`flex flex-col ${className}`}>{children}</div>
);

const Box = styled.div`
  ${"" /* max-width: 74%; */}
  display: block;
  margin-top: 1.5rem;
  font-size: 18px;
  color: #838383;
`;

const StyledBoxContainer = styled(BoxContainer)`
  h1 {
    color: #167a91;
    font-size: 34px;
  }
  h5 {
    color: #ffb808;
    font-size: 22px;
  }
`;

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
      <StyledImg
        r={index == 1 ? 4 : index == 2 ? 2 : 0}
        b={index == 1 ? 28 : index == 2 ? 20 : 0}
      >
        {showPicture()}
      </StyledImg>
      <div className="ml-10 w-1/12">
        <Dot scale={index === 0 ? 27 : 21} className=" mt-5" />

        <Dot scale={index === 1 ? 27 : 21} className=" my-5" />
        <Dot scale={index === 2 ? 27 : 21} />
      </div>

      <div className=" flex flex-col w-8/12  ">
        <a className="mr-20 self-center" onClick={next}>
          <StyledTopArrow />
        </a>
        {text.map((el, i) => {
          if (index === i) {
            return (
              <StyledBoxContainer>
                <h1 className="self-start">{el.title}</h1>
                <h5 className="self-center ml-48">{el.subTitle}</h5>
                <Box className="z-10" key={`box-${i}`}>
                  <div className="w-10/12">{el.text}</div>
                </Box>
              </StyledBoxContainer>
            );
          }
        })}
        <a className="mr-20 self-center" onClick={prev}>
          <StyledDownArrow />
        </a>

        <CallToAction />
      </div>
    </Container>
  );
};

export default Carousel;
