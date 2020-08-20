import React, {useState, useEffect} from 'react';
import Board from './Board';
import RedoButtons from './RedoButtons';
import WinModal from './Modal';
import ScoreBoard from './ScoreBoard';
import Timer from './Timer';

function GameControler() {
    const [board, setBoard] = useState(new Array(9).fill(null));
    const [history, setHistory] = useState([board]);
    const [duration, setDuration] = useState(0);
    const [player1Turn, setPlayer1Turn] = useState(true);
    
    useEffect(()=> {
      if(history[0] !== board) {
        let newHistory = history.slice(0);
        newHistory.push(board);
        setHistory(newHistory);
        setPlayer1Turn(!player1Turn);
      }
    },[board])

    // useEffect(()=>{
    //   if(!history[0]) {
    //     setPlayer1Turn(false);
    //     return;
    //   }
    //   setPlayer1Turn(!player1Turn);
    // }, [history])

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
      let newHistory = history.slice();
      newHistory.splice(-(newHistory.length - move));
      setHistory(newHistory);
    }   
    
    const restartGame = () => {
      let newBoard = new Array(9).fill(null);
      setHistory([newBoard]);
      setBoard(newBoard);
      setPlayer1Turn(true);
      setDuration(0);
    }

    return (
        <>
        <h1 id="header">Welcome</h1>
        <h3>Game Time: {duration}</h3>
        <div id="info">
        <Timer currentTime={duration} tick={setDuration} stopTimer={isGameOver()} />
        {isGameOver() ?
        (calculateWinner(board)[0] ?
        <>
        <h2>Winner is: {calculateWinner(board)[0]}</h2>
        <WinModal winner={player1Turn} duration={duration} restartGame={restartGame} />
        </>
        :
        <>
        <h2><b>Draw</b></h2>
        {setTimeout(restartGame,1000)}
        </>
        )
        :
        <h2>{`${player1Turn ? 'X' : 'O'} Turn`} </h2>
        }
        </div>
        <section id="main">
          <div>
            <ScoreBoard currentBoard={board} duration={duration}/>
          </div>
          <div id="board">
            <Board board={history[history.length - 1]} setBoard={setBoard} player1Turn={player1Turn} isGameOver={isGameOver()}/>
          </div>
          <div id="redoButtons">
            <RedoButtons history={history} redo={jumpTo}/>
          </div>
        
        </section>
        </>
    );
}

export default GameControler;