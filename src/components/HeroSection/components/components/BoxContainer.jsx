import React from "react";
import styled from "styled-components";
import TextBox from './TextBox';
// Carousel Boxes


export default function BoxContainer(props) {
    return (<Container {...props}  > 
        <h1 className="h1 text-xs sm:text-s md:text-base self-start" >{props.title}</h1>
                <h5  className="h5 text-xs sm:text-s md:text-base" index={props.index} >{props.subTitle}</h5>
                <TextBox index={props.index}  text={props.text} /> 
                </Container>
                )
}


const Box = ({ className, children }) => (<div className={`flex flex-col ${className}`}>{children}</div>);
export const Container = styled(Box)`
  .h1 {
    color: #167a91;
    font-size: 2.2rem;
    line-height:1;
  }

  .h5 {
    

    color: #ffb808;
    font-size: 1.25rem;
    margin-left: ${props => props.index === 0 ? 15.7: 12.5 }rem;
  }

 
`;
