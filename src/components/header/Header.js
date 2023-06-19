import React from "react";
import './Header.css';
import Navbar from "./navbar/Navbar";

const Header = () => {
  return (
    <div id="header-container">
      <div id="header-logo-container">
        <a href="/">
          <img
            className="header-logo"
            src={process.env.PUBLIC_URL + '/assets/images/logo.png'}
            alt="NLU logo"
          />
        </a>
      </div>
      <Navbar/>
    </div>
  )
}

export default Header;
