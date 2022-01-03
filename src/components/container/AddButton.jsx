import React from "react";

const AddButton = (props) => {
  const clickHandler = () => {
    console.log("clicked");
    props.onOpen(true);
  };
  return (
    <div className="button add w-button" onClick={clickHandler}>
      +
    </div>
  );
};

export default AddButton;
