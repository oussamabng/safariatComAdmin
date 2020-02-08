import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = ({ className, children }) => (
  <div className={`flex justify-center ${className}`}>{children}</div>
);

const Button = ({ className, children }) => (
  <button className={className}>{children}</button>
);

const JoinButton = styled(Button)`
  color: white;
  border: solid 2px #707070;
  background-color: #067989;
  border-radius: 20px;
  font-size: 17px;
  padding: 0.5rem 2.3rem;
  margin-left:1.3rem;
  margin-right: 2.5rem;


  @media (max-width:750px){
    font-size:11px;
    margin-right:1rem;
  }

  @media (min-width:1020px){
    margin-left:3.5rem;
  }



`;

const LearnMoreButton = styled(Button)`
  color: #02252d;
  border: solid 2px #084c61;
  border-radius: 20px;
  font-size: 17px;
  padding: 0.5rem 2.3rem;

  @media (max-width:768px){
    font-size:11px;
  }
`;

const CallToAction = props => {
  return (
    <Container className="self-start">
      <JoinButton>
        <Link to="/signup">Join Us</Link>
      </JoinButton>
      <LearnMoreButton>
        <Link to="/learnmore">Learn More</Link>
      </LearnMoreButton>
    </Container>
  );
};

export default CallToAction;
