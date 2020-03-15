import React from "react";
import styled from "styled-components";

const Slogan = (props, { className }) => {
  return (
    <Container>
      <h1 className={className}>We aim to digitalize the tourism industry</h1>
    </Container>
  );
};

const Container = styled.div`
  font-size: 0.56rem;
  color: #167a91;
  flex-basis: 100%;

  padding-top: 0.875rem;

  h1 {
    overflow: hidden;
    text-align: center;
  }
  h1:before,
  h1:after {
    background-color: #707070;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
    opacity: 0.36;
  }
  h1:before {
    right: 0.5em;
    margin-left: -50%;
  }
  h1:after {
    left: 0.5em;
    margin-right: -50%;
  }

  @media (min-width: 1024px) {
    font-size: 0.65rem;
  }

  @media (min-width: 1366px) {
    font-size: 0.875rem;
  }
`;

export default Slogan;
