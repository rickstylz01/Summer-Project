import React from "react";
import Header from "../header/Header";
import Quote from "../quoteForm/Quote";
import Footer from "../footer/Footer";
import FlavorCards from "./FlavorCards";

const Flavors = () => {
  return (
    <>
      <Header/>
      <FlavorCards/>
      <Quote/>
      <Footer/>
    </>
  )
}

export default Flavors;
