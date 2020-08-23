import React from "react";

function Square(props) {
  const { value, onSquareClick, id } = props;

  return (
    <div id={id} className="square" onClick={() => onSquareClick(id)}>
      {value}
    </div>
  );
}

export default Square;
