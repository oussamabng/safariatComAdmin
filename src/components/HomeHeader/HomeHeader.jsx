import React from "react";
import { Link } from "react-router-dom";

// import logo from "./images/logoForWeb.png";
import HumbergerMenu from "./components/HumbergerMenu";
import NavMenu from "./components/NavMenu";

import styled from "styled-components";

import Slogan from "./components/Slogan";

const clientWidth = document.querySelector("html").clientWidth;

const smallLogo = "images/logoForWeb.png";
const bigLogo = "images/logoForWeb-1x.png";

const HomeHeader = () => {
  return (
    <Container>
      <div className="logo">
        <Link to="/">
          {clientWidth < 768 ? (
            <img src={smallLogo} className="logo__img" alt="" />
          ) : (
            <img src={bigLogo} className="logo__img" alt="" />
          )}
        </Link>
      </div>
      <HumbergerMenu />

      {/* Search */}
      <div className="right">
        <NavMenu />

        <div className="right__r">
          {/* Search */}
          <div className="search" id="hs">
            <i className="fas fa-search border-r-2 px-2 text-gray-600"></i>
            <input
              className="input appearance-none bg-transparent text-gray-700 leading-tight"
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

export default HomeHeader;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  position: relative;

  // padding-top: 0.875rem;

  // Logo
  .logo {
    flex-basis: 80%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo__img {
    width: 6.25rem;
    height: 2.6rem;

    @media (max-width: 1023px) {
      margin-left: 20vw;
    }
  }

  // Login And Search
  .right {
    display: none;
  }

  @media (min-width: 1024px) {
    justify-content: flex-start;

    //Logo
    .logo {
      flex-basis: auto;
      margin-left: 5.1rem;
      justify-content: flex-start;
    }

    .logo__img {
      width: 8.75rem;
      height: 3.75rem;
    }

    .right {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 3.2rem;
      margin-left: 3.5rem;
      flex-grow: 1;
    }

    .right__r {
      display: flex;
      align-items: center;
    }

    // Search
    .search {
      margin-right: 3rem;
      z-index: 1;
      background-color: white;
      padding: 0.7rem 1rem;
      border: solid 1px white;
      border-radius: 50px;
    }

    .input {
      width: 10.25rem;
    }

    // Login Button
    .loginBtn {
      font-size: 0.75rem;
      color: #fff;
      padding: 0.7rem 1.1rem;
      border: solid 1px #ffb808;
      border-radius: 20px;
      background-color: #ffb808;
      z-index: 1;
    }
  }

  @media (min-width: 1366px) {
    .logo__img {
      width: 11.5rem;
      height: 5.1rem;
    }

    .loginBtn {
      font-size: 1rem;
      padding: 0.55rem 2.6rem;
    }
  }
`;
