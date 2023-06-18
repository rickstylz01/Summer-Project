import React from "react";
import Quote from "../quoteForm/Quote";
import FlavorCards from "./flavorCards/FlavorCards";

const Flavors = () => {
  return (
    <div id="flavorsPage-wrapper">
      <FlavorCards/>
      <Quote/>
    </div>
  )
}

export default Flavors;
