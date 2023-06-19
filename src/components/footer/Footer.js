import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer-container">
      <div id="img-container">
        <a href="/">
          <img
            className="footer-logo"
            src={process.env.PUBLIC_URL + '/assets/images/logo.png'}
            alt="NLU logo"
          />
        </a>
      </div>
      <div id="copyright-container">
        <small className="copyright-text">Copyright &copy; 2018. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer;
