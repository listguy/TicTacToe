import React, { useEffect, useState } from 'react';
const axios = require('axios');

function ScoreBoard() {
    // let scores;
    const [scores, setScores] = useState([]);
    // const [loading, setLoading] = useState(true);
    // let loading = false;
    
    useEffect(()=>{
        async function getScores() {
            const {data} = await axios.get('/api/scores');
            if(data.length !== scores.length) {
                console.log("!");
                setScores(data);
            }
        }
        getScores();
    },);

    return (
        scores ?
        scores.map(player => {
        return <div>{player.winnerName}</div>
        })
        :
        'loading...'
    )  
    
}
export default ScoreBoard;