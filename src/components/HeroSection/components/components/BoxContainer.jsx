import React from "react";
import styled from "styled-components";
import TextBox from "./TextBox";
// Carousel Boxes

export default function BoxContainer(props) {
<<<<<<< HEAD
    return (<Container {...props}  > 
        <h1 className="h1  self-start" >{props.title}</h1>
                <h5  className="h5" index={props.index} >{props.subTitle}</h5>
                <TextBox index={props.index}  text={props.text} /> 
                </Container>
                )
=======
  return (
    <Container {...props}>
      <h1 className="h1 text-xs sm:text-s md:text-base self-start">
        {props.title}
      </h1>
      <h5 className="h5 text-xs sm:text-s md:text-base" index={props.index}>
        {props.subTitle}
      </h5>
      <TextBox index={props.index} text={props.text} />
    </Container>
  );
>>>>>>> 54889d2f5fd443ece58c758ecba7457df998a2cc
}

const Box = ({ className, children }) => (
  <div className={`flex flex-col ${className}`}>{children}</div>
);
export const Container = styled(Box)`
  

  .h1 {
    color: #167a91;
    font-size: 2.2rem;
<<<<<<< HEAD

    @media (max-width:768px) {
      font-size:1.625rem;
      word-spacing: 1px;
    }

=======
    line-height: 1;
>>>>>>> 54889d2f5fd443ece58c758ecba7457df998a2cc
  }

  .h5 {
    color: #ffb808;
    font-size: 1.25rem;
<<<<<<< HEAD
    margin-left: ${props => props.index === 0 ? 15.7: 12.5 }rem;

    @media (max-width:1024px) {
      font-size:.9rem;
      margin-left:5.3rem;
      word-spacing: 1px;
    }

  }


 
=======
    margin-left: ${props => (props.index === 0 ? 15.7 : 12.5)}rem;
  }
>>>>>>> 54889d2f5fd443ece58c758ecba7457df998a2cc
`;
