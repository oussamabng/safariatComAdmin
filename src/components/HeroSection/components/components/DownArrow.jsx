import React from "react";
import styled from "styled-components";

export default function DownArrow() {
    return (
        <Container />
    )
}



const Arrow = ({ className, children }) => (<img className={className} src="DownArrow.svg" alt="top arrow">
  {children}
</img>);

const Container = styled(Arrow)`
  max-width: 2.25rem;
  max-height: 2.25rem;
  cursor: pointer;
  margin-top: 3.3rem;
  margin-bottom: 2rem;
`;
