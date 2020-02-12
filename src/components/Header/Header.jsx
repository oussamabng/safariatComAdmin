import React from "react";
import { Link } from "react-router-dom";

import logo from "./images/logoForWeb.png";
import HumbergerMenu from "./components/HumbergerMenu";
import NavMenu from "./components/NavMenu";

import styled from "styled-components";

import Slogan from "./components/Slogan";

const Header = () => {
  return (
    <Container>
      <div className="logo">
        <Link to="/">
          <img src={logo} width="105" height="42" alt="" />
        </Link>
      </div>
      <HumbergerMenu />

      {/* Search */}
      <div className="right">
        <NavMenu />
        <div className="right__r">
          <div className="search" id="hs">
            <i className="fas fa-search border-r-2 px-2 text-gray-600"></i>
            <input
              className="appearance-none bg-transparent text-gray-700 leading-tight"
              id="search"
              type="text"
              placeholder="Search"
            />
          </div>

          {/* Login */}
          <button className="loginBtn">login</button>
        </div>
      </div>

      <Slogan />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  // margin: 0 1rem;

  position: relative;

  // Logo
  .logo {
    flex-basis: 84%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  // Login And Search
  .right {
    display: none;
  }

  @media (min-width: 1024px) {
    justify-content: flex-start;

    .logo {
      flex-basis: auto;
      margin-left: 5.1rem;
      justify-content: flex-start;
    }

    .right {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 3.94rem;
      margin-left: 3.4rem;
      flex-grow: 1;
    }

    .right__r {
      display: flex;
      align-items: center;
    }

    // Login Button
    .loginBtn {
      font-size: 0.75rem;
      color: #fff;
      padding: 0.7rem 1.1rem;
      border: solid 1px #ffb808;
      border-radius: 20px;
      background-color: #ffb808;
    }
  }
`;
