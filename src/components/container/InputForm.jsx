import React from "react";
import { useState } from "react";

const InputForm = (props) => {
  const [enteredCategory, setEnteredCategory] = useState("");
  const [enteredAPI, setEnteredAPI] = useState("");

  const clickHandler = () => {
    console.log("clicked on card");

    props.modalClose(false);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredCategory.length === 0 || enteredAPI.length === 0) {
      return;
    }
    const inputData = {
      title: enteredCategory,
      api: enteredAPI,
      id: Math.random().toString(),
    };
    console.log("entry", inputData);
    if (props.length > 5) {
      return;
    }
    props.onAddData(inputData);
    props.modalClose(false);
  };

  const enteredCategoryChangeHandler = (e) => {
    setEnteredCategory(e.target.value);
  };

  const enteredAPIChangeHandler = (e) => {
    setEnteredAPI(e.target.value);
  };

  // console.log(enterdAPI, enteredCategory);
  return (
    <div>
      <div className="modal" onClick={clickHandler}>
        <div className="card" onClick={(e) => e.stopPropagation()}>
          <h2 className="title">Add Category</h2>
          <div className="form-block-2 w-form">
            <form
              onSubmit={submitHandler}
              name="email-form-2"
              className="form-2"
            >
              <input
                onChange={enteredCategoryChangeHandler}
                type="text"
                className="category w-input"
                maxLength={256}
                placeholder="Category Name"
              />
              <input
                onChange={enteredAPIChangeHandler}
                type="text"
                className="api-url w-input"
                maxLength={256}
                placeholder="API URL"
                id="name-2"
              />
              <input type="submit" className="submit-button-2 w-button" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
