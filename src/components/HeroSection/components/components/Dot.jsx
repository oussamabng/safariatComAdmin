import styled from "styled-components";

import React from 'react'

export default function Dot(props) {
    return <Container {...props} />
}


const Container = styled.span`
  height: ${props => props.scale}rem;
  width: ${props => props.scale}rem;
  background-color: #ffb808;
  border-radius: 50%;
  display: block;
  margin-right:2.6rem;
  margin-top : 1.5rem;
`;
