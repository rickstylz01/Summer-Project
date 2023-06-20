import React from "react";
import './Quote.css';

const Quote = () => {
  return (
    <div id="quoteForm-container">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Name"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Email"
        />
      </div>
      <div className="mb-3">
        <select className="form-select" id="dropdownField" data-placeholder="Select a capability">
          <option selected>Choose a capability</option>
          <option value="option1">Design</option>
          <option value="option1">Production</option>
          <option value="option1">Certification</option>
        </select>
      </div>
      <div className="mb-3">
        <textarea
          className="form-control comment-area"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Comments">
        </textarea>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label
          className="form-check-label"
          htmlFor="flexCheckDefault"
        >
          I'd like to receive the newsletter
        </label>
      </div>
      {/* TODO: change color of button text*/}
      <button
        type="button"
        className="btn btn-info custom-button"
      >
        Get a quote
      </button>
    </div>
  )
}

export default Quote;
