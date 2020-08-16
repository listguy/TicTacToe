import React, { useState } from 'react';
import Square from './Square';

let player1Turn = true;
function Board (props) {
    const {board, setBoard} = props;
    // const [board, setBoard] = useState(props.board);

    const makeMove = (id) => {
        let newBoard = board.slice();
        if(board[id] !== null) return;
        newBoard[id] = player1Turn ? 'X' : 'O';
        player1Turn = !player1Turn;
        setBoard(newBoard);
    }

    return (
        <>
        <div id="board">
            {[1,2,3].map(i => {
                return (<li key={`br${i}`}>
                    {[1,2,3].map(j => {
                        return <Square value={board[j+3*(i-1) - 1]} id={[j+3*(i-1) - 1]} onSquareClick = {makeMove}/>
                    })}
                </li>)
            })}
        </div>
        </>
    )
}

export default Board;