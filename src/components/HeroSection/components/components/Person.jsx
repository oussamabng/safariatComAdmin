import React from "react";
import styled from "styled-components";


const Person = (props)=> {
    return (
        <Container {...props} />
    )
}
export default Person;

const Img = ({ className, children }) => (<div className={className}>{children}</div>);
const Container = styled(Img)`
 height:${props => props.index === 1 ? 13.125: 10}rem ;
  width: ${props => props.index === 1 ? 14.4: 6.875}rem ;
  position: absolute;
  right:0;
  bottom:0;

  transform:translate(58%,25%);

  z-index: 0;
  
`;
