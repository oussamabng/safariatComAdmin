import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function HumbergerMenu() {
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
        <li className="list__item">
          <Link to="/about">About us</Link>
        </li>
      </ul>
    </Container>
  );
}

const HumMenu = ({ className, children }) => (
  <div className={className}>
    {/* <label for="menu-toggle" className="lg:hidden block point-cursor">
      <i className="fas fa-align-justify fa-2x"></i>
    </label> */}
    <label for="menu-toggle" className="hum-menu">
      <hr className="hr hr1" />
      <hr className="hr hr2" />
      <hr className="hr hr3" />
    </label>
    <input type="checkbox" id="menu-toggle" />
    {children}
  </div>
);

const Container = styled(HumMenu)`
  display: flex;
  justify-content: flex-start;
  z-index: 1;

  color: #ffb808;

  flex-basis: 20%;
  input {
    display: none;
  }
  // Styling Humberger Lines
  .hum-menu {
    display: block;
    width: 2.75rem;
    text-align: right;
    color: #ffb808;
    line-height: 0.7;
  }
  .hr {
    display: inline-block;
    background-color: #ffb808;
    height: 0.3rem;
    border: none;
    border-raduis: 50%;
  }

  .hr1 {
    width: 2.65rem;
  }

  .hr2 {
    width: 2.75rem;
  }

  .hr3 {
    width: 2.55rem;
  }

  // Toggling Menu State

  .list {
    display: none;
  }
  input:checked ~ .list {
    display: block;
    width: 100%;
  }

  @media (min-width: 768px) {
    justify-content: center;
  }

  @media (min-width: 1024px) {
    display: none;
  }

  // --------------
  //  List and List ITems
  .list {
    position: absolute;
    top: 5.5rem;
    right: 0;
    left: 0;
    width: 100%;
    text-align: center;
    background-color: #fff;
  }
  .list__item {
    display: block;
    width: 50%;
    margin: 0 auto;
    border-bottom: solid 1px #eee;
    color: #ffb808;
  }
`;
