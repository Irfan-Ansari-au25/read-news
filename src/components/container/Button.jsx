import { useState } from "react";

const Button = (props) => {
  const [isSelected, setIsSeclected] = useState(false);
  const buttonClickHandler = () => {
    setIsSeclected(true);

    // props.onActive(false);
    console.log(props.id);

    console.log(props.data);
    const catData = props.data.filter((cat) => {
      return cat.id === props.id;
    });
    console.log(catData);

    // add data to parent
    props.addData(catData);
  };

  return (
    <div
      className={`button  w-button ${isSelected && "active"}`}
      onClick={buttonClickHandler}
    >
      {props.title}
    </div>
  );
};

export default Button;
