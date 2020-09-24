import React from "react";
import Cross from "./Cross";
import Circle from "./Circle";

function Square(props) {
  let value = null;

  console.log("props.value", props.value);

  switch (props.value) {
    case "X":
      value = <Cross />;
      break;
    case "O":
      value = <Circle />;
      break;
  }

  return (
    <div className="Square" onClick={props.onClick}>
      {value}
    </div>
  );
}

export default Square;
