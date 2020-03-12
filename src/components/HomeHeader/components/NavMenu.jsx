import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NavMenu(props) {
  return (
    <Container>
      <ul className="list">
        <li className="first list__item">
          <Link to="/">Home</Link>
        </li>
        <li className="list__item">
          <Link to="/services">Service</Link>
        </li>
        <li className="list__item">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="list__item">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="list__item">
          <Link to="/about">About us</Link>
        </li>
      </ul>
    </Container>
  );
}

const Container = styled.nav`
  display: none;
  z-index: 1;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    .list {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .list__item {
      color: #5d5d5d;
      font-weight: bold;
      padding: 0 1rem;
      border-left: solid 1px #eee;
      font-size: 0.7rem;
    }

    .first {
      border: none;
    }
  }

  @media (min-width: 1366px) {
    .list__item {
      padding: 0 1.6em;
      font-size: 0.94rem;
    }
  }
`;
