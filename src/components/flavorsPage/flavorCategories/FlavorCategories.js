import React from "react";
import './FlavorCategories.css'
import { useParams } from "react-router-dom";
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
  // retrieves category array based on category parameter value
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
              <li key={index} className="list-group-item">
                {flavorCategory}
              </li>
            ))}
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
