import React from 'react'
import styled from 'styled-components';

const TopArrow = () => {
    return <Container />
}

export default TopArrow;


const Arrow = ({ className, children }) => (
    <img className={className} src="TopArrow.svg" alt="top arrow">
      {children}
    </img>
  );
  

const Container = styled(Arrow)`
    max-width: 2.25rem;
    max-height: 2.25rem;
    cursor: pointer;
    margin-bottom: 2.2rem;
    margin-top:4.7rem;
  `;