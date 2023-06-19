import React from "react";
import { useParams } from "react-router-dom";
import './FlavorCategories.css'
import Quote from "../../quoteForm/Quote";

const FlavorCategories = () => {
  const { category } = useParams();

  const flavorCategories = {
    "Soft Fruits": [
      'Sweet',
      'Tart',
      'Floral',
      'Juicy',
      'Subtly Earthy',
      'Nutty'
    ],
    "Citrus": [
      'Tangy',
      'Refreshing',
      'Zesty',
      'Bitter-Sweet',
      'Citrus-Sweet',
      'Tropical'
    ],
    "Tropical": [
      'Exotic',
      'Tropical Citrus',
      'Creamy',
      'Tangy-Sweet',
      'Coconutty',
      'Melon-like'
    ]
  };

  const selectedFlavorCategories = flavorCategories[category];

  // Check if selectedFlavorCategories is undefined or null
  if (!selectedFlavorCategories) {
    return <div>Category not found.</div>;
  }

  return (
    <div id="flavor-categories-wrapper">
      <div id="flavor-categories-body-container">
        <div id="flavor-categories-header">
          <h1>Flavor category name</h1>
        </div>
        <div id="list-group-container">
          <ul className="list-group list-group-flush">
            {selectedFlavorCategories.map((flavorCategory, index) => (
              <li
                key={index}
                className="list-group-item"
              >
                {flavorCategory}
              </li>
            ))}
            {/*<li className="list-group-item">Aldehyde-Free, Berry</li>*/}
            {/*<li className="list-group-item">Aldehyde-Free, Cherry</li>*/}
            {/*<li className="list-group-item">Apple (various)</li>*/}
            {/*<li className="list-group-item">Apple, Baked</li>*/}
            {/*<li className="list-group-item">Apricot</li>*/}
            {/*<li className="list-group-item">Etc...</li>*/}
          </ul>
        </div>
      </div>
      <div id="flavorCategories-quoteForm-container">
        <Quote/>
      </div>
    </div>
  )
}

export default FlavorCategories;
