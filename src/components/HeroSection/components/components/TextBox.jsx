import React from "react";
import styled from "styled-components";
import Person from "./Person";

const TextBox = props => {
  const showPicture = () => {
    return props.index === 1 ? (
      <img src="men.png" alt="men"></img>
    ) : props.index === 2 ? (
      <img val={2} src="women.png" alt="women"></img>
    ) : null;
  };
<<<<<<< HEAD
  return( 
    <Container  {...props} className="z-10 relative"  >
      
        <div className="z-10 text text-xs  md:text-base">{props.text}</div>

        <Person 
        index={ props.index}
      >
        {showPicture()}
      </Person> 
        

       </Container>)
}
=======
  return (
    <Container {...props} className="z-10 w-12/12 relative">
      <div className="z-10 text-xs sm:text-s md:text-base">{props.text}</div>
>>>>>>> 54889d2f5fd443ece58c758ecba7457df998a2cc

      <Person index={props.index}>{showPicture()}</Person>
    </Container>
  );
};

const Container = styled.div`
  ${"" /* max-width: 74%; */}
  display: flex;
  margin-top: 1rem;
  font-size: 1.1rem;
  color: #838383;
<<<<<<< HEAD
  width: ${props => props.index === 0 ? 27.875 : props.index === 1 ? 22.25 : 22.25 }rem;

  
  @media (max-width:768px){

    width: ${props => props.index === 0 ? 16.25 : props.index === 1 ? 11 : 11 }rem;
  }

  

  .text{
    @media (max-width:768px){
      font-size:12px;
      word-spacing: 1px;

      flex-basis:  ${props => props.index === 0 ? 15 : 11 }rem;
    }
  }
=======
  width: ${props =>
    props.index === 0 ? 27.875 : props.index === 1 ? 22.25 : 22.25}rem;
>>>>>>> 54889d2f5fd443ece58c758ecba7457df998a2cc
`;

export default TextBox;
