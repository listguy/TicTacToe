import React, {useState, useEffect} from 'react';
import Board from './Board';
import RedoButtons from './redoButtons';

const history = [];

function GameControler() {
    const [board, setBoard] = useState(new Array(9).fill(null));

    useEffect(()=> {
        history.push(board);
        console.log(history)

    },)

    const isGameOver = () => {
        return (board.filter(s => s!== null).length === 9)
    }

    function jumpTo(move, boardState) {
        history.splice(-(history.length - move));
        setBoard(boardState);
    }    
    return (
        <>
        <h1>Welcome</h1>
        {isGameOver() && 
        <h2>Game Over</h2>}
        <div id="board">
        <Board board={board} setBoard={setBoard}/>
        </div>
        <div id="redoButtons">
            <RedoButtons history={history} redo={jumpTo}/>
        </div>
        </>
    );
}

export default GameControler;