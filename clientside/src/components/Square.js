import React from 'react';

function Square (props) {
    const {value, onSquareClick, id} = props;

    return (
        <div className="square" onClick={() => onSquareClick(id)}>
            {/* <span className="pawn"> */}
            {value}
            {/* </span> */}
            </div>
    )
}

export default Square;