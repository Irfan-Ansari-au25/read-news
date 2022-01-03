import React from "react";

const SearchBar = () => {
  return (
    <div className="form-block mb-16 w-form">
      <form
        id="email-form"
        name="email-form"
        data-name="Email Form"
        method="get"
        className="form"
      >
        <input
          type="text"
          className="text-field w-input"
          maxLength={256}
          name="name"
          data-name="Name"
          placeholder="Search for Keywords, author"
          id="name"
        />
        <div className="div-block">
          <input
            type="submit"
            defaultValue
            data-wait="Please wait..."
            className="submit-button w-button"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
