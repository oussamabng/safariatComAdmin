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
  padding: 0.5rem 2.5rem;
  margin-right: 2rem;
`;

const LearnMoreButton = styled(Button)`
  color: #02252d;
  border: solid 2px #084c61;
  border-radius: 20px;
  font-size: 17px;
  padding: 0.5rem 1rem;
  margin-right: 4.5rem;
`;

const CallToAction = props => {
  return (
    <Container>
      <JoinButton>
        <Link to="/signup">Join</Link>
      </JoinButton>
      <LearnMoreButton>
        <Link to="/learnmore">Learn More</Link>
      </LearnMoreButton>
    </Container>
  );
};

export default CallToAction;
