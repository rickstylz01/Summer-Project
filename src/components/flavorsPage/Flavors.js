import React from "react";
import Header from "../header/Header";
import Quote from "../quoteForm/Quote";
import Footer from "../footer/Footer";

const Flavors = () => {
  return(
    <div>
      <div><img src={process.env.PUBLIC_URL + '/assets/images/soft-fruits.jpg'} alt="a spread of soft fruits"/></div>
      <div><img src={process.env.PUBLIC_URL + '/assets/images/citrus.jpg'} alt="a spread of soft fruits"/></div>
      <div><img src={process.env.PUBLIC_URL + '/assets/images/tropical.jpg'} alt="a spread of soft fruits"/></div>
      <div><img src={process.env.PUBLIC_URL + '/assets/images/fruits-etc.jpg'} alt="a spread of soft fruits"/></div>
    </div>
  )
}

export default Flavors;
