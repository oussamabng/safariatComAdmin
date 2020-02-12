import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NavMenu(props) {
  return (
    <Container>
      <ul className="list">
        <li className="list__item">
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
        <li className="list__item last">
          <Link to="/about">About us</Link>
        </li>
      </ul>
    </Container>
  );
}

const Container = styled.nav`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    .list {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .list__item {
      padding: 0 1.25rem;
      border-right: solid 1px #eee;
    }

    .last {
      border: none;
    }
  }
`;
