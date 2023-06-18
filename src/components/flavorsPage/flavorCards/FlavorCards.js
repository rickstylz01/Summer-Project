import React from "react";
import './FlavorCards.css'
import Quote from "../../quoteForm/Quote";

const FlavorCards = () => {
  return (
    <div id="flavorsCards-body-wrapper">
      <div id="header-cards-container">
        <div className="flavor-header">
          <h1>Flavors</h1>
        </div>
        <div id="cards-wrapper" className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <a href="#">
              <div className="card">
                <img
                  src={process.env.PUBLIC_URL + '/assets/images/soft-fruits.jpg'}
                  className="card-img-top"
                  alt="a spread of soft fruits"
                />
                <div className="card-body">
                  <h5 className="card-title">Soft Fruits</h5>
                </div>
              </div>
            </a>
          </div>
          <div className="col">
            <a href="#">
              <div className="card">
                <img
                  src={process.env.PUBLIC_URL + '/assets/images/citrus.jpg'}
                  className="card-img-top"
                  alt="citrus fruits slices lined up from small to big"
                />
                <div className="card-body">
                  <h5 className="card-title">Citrus</h5>
                </div>
              </div>
            </a>
          </div>
          <div className="col">
            <a href="#">
              <div className="card">
                <img
                  src={process.env.PUBLIC_URL + '/assets/images/tropical.jpg'}
                  className="card-img-top"
                  alt="a dragon fruit sliced in half"
                />
                <div className="card-body">
                  <h5 className="card-title">Tropical</h5>
                </div>
              </div>
            </a>
          </div>
          <div className="col">
            <a href="#">
              <div className="card">
                <img
                  src={process.env.PUBLIC_URL + '/assets/images/fruits-etc.jpg'}
                  className="card-img-top"
                  alt="a man in front of a fruit market"
                />
                <div className="card-body">
                  <h5 className="card-title">Etc...</h5>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Quote/>
    </div>
  )
}

export default FlavorCards;
