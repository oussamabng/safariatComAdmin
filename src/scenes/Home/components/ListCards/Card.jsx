import React from "react";
import styled from 'styled-components'
const Card = ({data}) => {
  const { title, body, img} = data ;
  return (
    <Wrapper className="lg:w-1/5 md:w-full flex flex-col justify-start my-2 mx-2 pt-8 pb-12 px-4  text-center rounded-lg bg-white">
      <img src={img} alt="" className="pb-2 mx-auto border-b border-gray-400" style={{width: "85px", height: "85px"}}/>
      <div className="text-center text-gray font-montserrat">
        <h3 className="pb-2 text-xl opacity-80">{title}</h3>
        <p className="text-xs custom-text opacity-60">
          {body}
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 24.5%;
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
  
`

export default Card;
