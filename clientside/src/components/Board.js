import React from 'react';
import Square from './Square';

// let player1Turn = true;
function Board (props) {
    const {board, setBoard, player1Turn, isGameOver} = props;

    const makeMove = (id) => {
        let newBoard = board.slice();
        if(board[id] !== null || isGameOver) return;
        newBoard[id] = player1Turn ? 'X' : 'O';
        setBoard(newBoard);
    }

    return (
        <>
            {board.map((p,i) => <Square key={`square${i}`} value={board[i]} id={i} onSquareClick = {()=> makeMove(i)}/>)}
        </>
    )
}

export default Board;