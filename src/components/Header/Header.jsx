import React from "react";
import { Nav, Logo, NavMenu, UserImg } from "./styles";

const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="home" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="search" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="watchlist" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="originals" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="movie" />
          <span>MOVIE</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="series" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="/images/profile.jpeg" />
    </Nav>
  );
};

export default Header;
