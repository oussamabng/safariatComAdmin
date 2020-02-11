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

      <NavMenu />
      <Slogan />

      {/* Search */}
      <div className="search" id="hs">
        <i className="fas fa-search border-r-2 px-2 text-gray-600"></i>
        <input
          className="appearance-none bg-transparent h-1 py-2 px-3 text-gray-700 leading-tight"
          id="search"
          type="text"
          placeholder="Search"
        />
      </div>

      {/* Login */}
      <div className=" login hidden lg:flex items-center" id="hs2">
        <button className="hidden bg-yellow text-white font-bold py-1 px-5 rounded-full button-shadow">
          login
        </button>
      </div>
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
  margin: 0 1rem;

  position: relative;

  // Logo
  .logo {
    display: inline-block;
    flex-basis: 84%;
    display: flex;
    justify-content: center;
  }

  // Login And Search
  .login,
  .search {
    display: none;
  }

  @media (min-width: 768px) {
    .login,
    .search {
      display: block;
    }
  }
`;
