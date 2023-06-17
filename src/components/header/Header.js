import React from "react";
import Navbar from "./Navbar";
const Header = () => {
 return(
   <div>
     <div className="logoImg">
       <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="NLU logo"/>
     </div>
     <Navbar />
   </div>
 )
}

export default Header;
