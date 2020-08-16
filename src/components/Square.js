import React from 'react';

function Square (props) {
    const {value, onSquareClick, id} = props;

    return (
        <button className="square" onClick={() => onSquareClick(id)}>{value}</button>
    )
}

export default Square;