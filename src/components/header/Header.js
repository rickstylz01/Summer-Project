import React from "react";
import Navbar from "./Navbar";
const Header = () => {
 return(
   <div>
     <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="NLU logo"/>
     <Navbar />
   </div>
 )
}

export default Header;
