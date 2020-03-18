import React from "react";
import styled from "styled-components";

export default function Arrows() {
  return (
    <Container className="arrows text-11 sD:text-13 mD:text-15 lD:text-21s">
      <i className="fas fa-chevron-up"></i>
      <i className="fas fa-chevron-down"></i>
    </Container>
  );
}

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;

  .fa-chevron-up {
    vertical-align: middle;
    margin-bottom: 0.2rem;
  }

  .fa-chevron-down {
    vertical-align: middle;
    margin-top: 0.2rem;
  }
`;
