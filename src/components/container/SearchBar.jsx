import React from "react";

const SearchBar = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const enteredSearchHandler = (e) => {
    const searchWord = e.target.value;
    props.filterFn(searchWord);
  };
  return (
    <div className="form-block mb-16 w-form">
      <form onSubmit={submitHandler} name="email-form" className="form">
        <input
          onChange={enteredSearchHandler}
          type="text"
          className="text-field w-input"
          maxLength={256}
          name="name"
          placeholder="Search for Keywords, author"
        />
        <div className="div-block">
          <input
            type="submit"
            defaultValue
            className="submit-button w-button"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
