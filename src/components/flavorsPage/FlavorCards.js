import React from "react";

const FlavorCards = () => {
  return (
    <>
      <h1>Flavors</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/assets/images/soft-fruits.jpg'} className="card-img-top"
                 alt="a spread of soft fruits"/>
            <div className="card-body">
              <h5 className="card-title">Soft Fruits</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/assets/images/citrus.jpg'} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Citrus</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/assets/images/tropical.jpg'} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Tropical</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/assets/images/fruits-etc.jpg'} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Etc...</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FlavorCards;
