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
            {/* {[1,2,3].map(i => {
                return (<li key={`br${i}`} className="board-row">
                    {[1,2,3].map(j => {
                        return <Square value={board[j+3*(i-1) - 1]} id={[j+3*(i-1) - 1]} onSquareClick = {makeMove}/>
                    })}
                </li>)
            })} */}
            {board.map((p,i) => <Square value={board[i]} id={i} onSquareClick = {makeMove}/>)}
        </>
    )
}

export default Board;