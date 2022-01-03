import React from "react";

const InputForm = () => {
  return (
    <div>
      <div className="modal">
        <div className="card">
          <h2 className="title">Add Category</h2>
          <div className="form-block-2 w-form">
            <form
              id="email-form-2"
              name="email-form-2"
              data-name="Email Form 2"
              method="get"
              className="form-2"
            >
              <input
                type="text"
                className="category w-input"
                maxLength={256}
                name="name-2"
                data-name="Name 2"
                placeholder="Category Name"
                id="name-2"
              />
              <input
                type="text"
                className="api-url w-input"
                maxLength={256}
                name="name-2"
                data-name="Name 2"
                placeholder="API URL"
                id="name-2"
              />
              <input
                type="submit"
                defaultValue="+ Add"
                data-wait="Please wait..."
                className="submit-button-2 w-button"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
