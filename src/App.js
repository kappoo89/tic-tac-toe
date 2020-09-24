import React, { useState } from "react";
import "./App.scss";
import { calculateWinner } from "./helpers";

import Board from "./components/Board";
import Status from "./components/Status";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setSquares(squares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="App">
      <Status winner={calculateWinner(squares)} xIsNext={xIsNext} />
      <Board squares={squares} onClick={handleClick} />
      <div className="playAgainButton" onClick={resetGame}>
        PLAY AGAIN
      </div>
    </div>
  );
}

export default App;
