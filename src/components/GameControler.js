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
        return (board.filter(s => s!== null).length === 9 || calculateWinner(board)[0])
    }

    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return [true, squares[a]];
          }
        }
        return [false, null];
      }

    function jumpTo(move, boardState) {
        history.splice(-(history.length - move));
        setBoard(boardState);
    }    
    return (
        <>
        <h1>Welcome</h1>
        {isGameOver() ?
        (calculateWinner(board)[0] ?
        <h2>Winner is: {calculateWinner(board)[1]}</h2>
        :
        <h2>Game Over</h2>)
        :
        ''
        }
        <div id="board">
        <Board board={board} setBoard={setBoard} isGameOver={isGameOver()}/>
        </div>
        <div id="redoButtons">
            <RedoButtons history={history} redo={jumpTo}/>
        </div>
        </>
    );
}

export default GameControler;