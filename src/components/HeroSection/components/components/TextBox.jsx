import React from 'react'
import styled from "styled-components";
import Person from './Person';

const TextBox = (props)=> {

  const showPicture = () => {
    return props.index === 1 ? (
      <img src="men.png" alt="men"></img>
    ) : props.index === 2 ? (
      <img val={2} src="women.png" alt="women"></img>
    ) : null;
  };
  return( 
    <Container  {...props} className="z-10 w-12/12 relative"  >
      
        <div className="z-10 text-xs sm:text-s md:text-base">{props.text}</div>

        <Person 
        index={ props.index}
      >
        {showPicture()}
      </Person> 
        

       </Container>)
}


const Container = styled.div`
  ${"" /* max-width: 74%; */}
  display: flex;
  margin-top: 1rem;
  font-size: 1.1rem;
  color: #838383;
  width: ${props => props.index === 0 ? 27.875 : props.index === 1 ? 22.25 : 22.25 }rem;
`;

export default TextBox;


