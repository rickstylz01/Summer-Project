import React from "react";

const Footer = () => {
  return(
    // TODO:create a black border for footer
    <footer>
      <div><small>Copyright &copy; 2018. All rights reserved. </small></div>
      <div><img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="NLU logo"/></div>
    </footer>
  )
}

export default Footer;
