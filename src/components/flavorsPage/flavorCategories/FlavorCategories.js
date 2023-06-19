import React from "react";
import './FlavorCategories.css'
import { useParams } from "react-router-dom";
import Quote from "../../quoteForm/Quote";

const FlavorCategories = () => {
  const { category } = useParams();

  const flavorCategories = {
    "soft fruits": [
      'Sweet',
      'Tart',
      'Floral',
      'Juicy',
      'Subtly Earthy',
      'Nutty'
    ],
    "citrus": [
      'Tangy',
      'Refreshing',
      'Zesty',
      'Bitter-Sweet',
      'Citrus-Sweet',
      'Tropical'
    ],
    "tropical": [
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

  // find category key from url path and capitalize first letter to render in h1 element
  const categoryKey = Object.keys(flavorCategories).find(key => key === category);
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const categoryUpperCase = categoryKey ? capitalizeFirstLetter(categoryKey) : 'Flavor Category';

  return (
    <div id="flavor-categories-wrapper">
      <div id="flavor-categories-body-container">
        <div id="flavor-categories-header">
          <h1>{categoryUpperCase}</h1>
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
