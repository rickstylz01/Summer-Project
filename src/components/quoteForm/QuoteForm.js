import React, {useEffect} from "react";

const QuoteForm = () => {
  useEffect(() => {
    // Initialize Bootstrap Select plugin after component mounts
    $('.selectpicker').selectpicker();
  }, []);

  return (
    <>
      {/*make a border for the form*/}
      <div className="mb-3">
        <input type="text" className="form-control" id="name" placeholder="Name"/>
      </div>
      <div className="mb-3">
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email"/>
      </div>
      <div className="mb-3">
        <select className="form-control selectpicker" id="dropdownField" data-placeholder="Select a capability">
          <option></option>
          <option value="option1">Option 1</option>
          <option value="option1">Option 2</option>
          <option value="option1">Option 3</option>
        </select>
      </div>
      <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Comments"></textarea>
      </div>
    </>
  )
}

export default QuoteForm;
