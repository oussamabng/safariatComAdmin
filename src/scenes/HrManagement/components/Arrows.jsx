import React from "react";
import styled from "styled-components";

export default function Arrows() {
  return (
    <Container className="arrows">
      <i class="fas fa-chevron-up"></i>
      <i class="fas fa-chevron-down"></i>
    </Container>
  );
}

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  margin-top: -0.4rem;
  .fa-chevron-up {
    vertical-align: middle;
    margin-bottom: 0.2rem;
  }

  .fa-chevron-down {
    vertical-align: middle;
    margin-top: 0.2rem;
  }
`;
