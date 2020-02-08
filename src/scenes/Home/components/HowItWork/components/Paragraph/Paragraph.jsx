import React from "react";
import styled from 'styled-components'
const Paragraph = ({title, body, padding=''}) => {
  return (

    <Wrapper className={`text-blackgray py-2 font-montserrat max-w-xl text-left pr-4 ${padding}`}>
      <h3 className="text-md font-bold">{title}</h3>
      <p className="text-xs">
        {body}
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  &:before {
    width: 95.5px;

    height: 37.5px;
  
    border-radius: 9.5px;
  
    background-color: #f2fafc;
  }
`

export default Paragraph;
