import React from "react";

function Status(props) {
  const { xIsNext, winner } = props;
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return <div className="Status">{status}</div>;
}

export default Status;
