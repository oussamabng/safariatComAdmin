import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NavMenu(props) {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Service</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
      </ul>
    </Container>
  );
}

const Container = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;
