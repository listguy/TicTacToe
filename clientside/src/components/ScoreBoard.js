import React, { useEffect, useState } from 'react';
const axios = require('axios');

function ScoreBoard(props) {
    const [scores, setScores] = useState([]);
    const {currentBoard} = props;
    
    useEffect(()=>{
        async function getScores() {
            const {data} = await axios.get('/api/scores');
            if(data.length !== scores.length) {
                setScores(data);
            }
        }
        if(currentBoard.every(v => v === null))
        {
            getScores();
        }
    },);

    return (
        scores ?
        scores.map((player, i) => {
        return <li key={`sb${i}`}>{`Name: ${player.winnerName}, Date: ${player.date}, Duration: ${player.duration}`}</li>
        })
        :
        'loading...'
    )  
    
}
export default ScoreBoard;