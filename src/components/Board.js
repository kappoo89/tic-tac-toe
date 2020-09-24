import React from "react";
import Square from "./Square";

function Board(props) {
  const squares = Array(9)
    .fill()
    .map((curr, i) => {
      return (
        <Square
          key={i}
          onClick={() => props.onClick(i)}
          value={props.squares[i]}
        />
      );
    });

  return <div className="Board">{squares}</div>;
}

export default Board;
