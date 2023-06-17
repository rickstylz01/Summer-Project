import React from "react";

const Footer = () => {
  return(
    <footer>
      <div><small>Copyright &copy; 2018. All rights reserved. </small></div>
      <div><img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="NLU logo"/></div>
    </footer>
  )
}

export default Footer;
