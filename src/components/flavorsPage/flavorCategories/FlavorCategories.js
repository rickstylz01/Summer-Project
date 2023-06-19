import React from "react";
import Quote from "../../quoteForm/Quote";

const FlavorCategories = () => {
  return (
    <div id="">
      <h1>Flavor category name</h1>
      {/*TODO: align text to the right*/}
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Aldehyde-Free, Berry</li>
        <li className="list-group-item">Aldehyde-Free, Cherry</li>
        <li className="list-group-item">Apple (various)</li>
        <li className="list-group-item">Apple, Baked</li>
        <li className="list-group-item">Apricot</li>
        <li className="list-group-item">Etc...</li>
      </ul>
      <Quote />
    </div>
  )
}

export default FlavorCategories;
