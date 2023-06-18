import React from "react";
import './Header.css';
import Navbar from "./Navbar";
const Header = () => {
 return(
   <div id="header-container">
     <div id="header-logo-container">
       <img
         className="header-logo"
         src={process.env.PUBLIC_URL + '/assets/images/logo.png'}
         alt="NLU logo"
       />
     </div>
     <Navbar />
   </div>
 )
}

export default Header;
