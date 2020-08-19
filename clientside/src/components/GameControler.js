import React, {useState, useEffect} from 'react';
import Board from './Board';
import RedoButtons from './RedoButtons';
import WinModal from './Modal';
import ScoreBoard from './ScoreBoard';

const history = [];

function GameControler() {
    const [board, setBoard] = useState(new Array(9).fill(null));
    let player1Turn = (history.length % 2 === 0);
    
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
        <h1 id="header">Welcome</h1>
        <div id="info">
        {isGameOver() ?
        (calculateWinner(board)[0] ?
        <>
        {/* <h2>Winner is: {calculateWinner(board)[0]}</h2> */}
        <WinModal winner={player1Turn} restartGame={()=>jumpTo(0,history[0])} />
        </>
        :
        <h2>Game Over</h2>)
        :
        <h2>{`${player1Turn ? 'X' : 'O'} Turn`} </h2>
        }
        </div>
        <section id="main">
          <div>
            <ScoreBoard />
          </div>
          <div id="board">
            <Board board={board} setBoard={setBoard} player1Turn={player1Turn} isGameOver={isGameOver()}/>
          </div>
          <div id="redoButtons">
            <RedoButtons history={history} redo={jumpTo}/>
          </div>
        
        </section>
        </>
    );
}

export default GameControler;