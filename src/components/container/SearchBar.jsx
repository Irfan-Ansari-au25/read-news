import React, { useState } from "react";

const SearchBar = (props) => {
  const [enteredSearch, setEnteredSearch] = useState("");
  const [searchResults, setsearchResults] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const enteredSearchHandler = (e) => {
    e.preventDefault();
    setEnteredSearch(e.target.value);
    console.log("daata", props.data[0].author);
    if (enteredSearch.length > 0) {
      setsearchResults(
        props.data.filter((item) => {
          return item.title.match(enteredSearch);
        })
      );
    }

    console.log(enteredSearch, searchResults);
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

      {searchResults.map((article, idx) => {
        return (
          <div key={idx}>
            <ul style={{ listStyle: "none" }}>
              <li>{article.title}</li>;
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default SearchBar;
