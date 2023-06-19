import React from "react";
import './HomeBody.css';
import Quote from "../../quoteForm/Quote";

const HomeBody = () => {
  return (
    <div id="home-section-wrapper">
      <div id="heading-article-container">
        <div id="home-section-header">
          <h1 id="heading">Design. Manufacture. Deliver</h1>
        </div>
        <div id="article">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.</p>
        </div>
      </div>
      <div className="quoteForm-homebody-wrapper">
        <Quote/>
      </div>
    </div>
  )
}

export default HomeBody;
