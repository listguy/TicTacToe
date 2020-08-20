import React, { useEffect, useState } from 'react';
const axios = require('axios');

function ScoreBoard(props) {
    const [scores, setScores] = useState([]);
    const {duration} = props;
    
    useEffect(()=>{
        async function getScores() {
            const {data} = await axios.get('/api/scores');
            if(data.length !== scores.length) {
                setScores(data);
            }
        }
        if(duration === 0)
        {
            console.log("fetching");
            getScores();
        }
    },);

    return (
        scores ?
        scores.map((player, i) => {
        return <li key={`sb${i}`}>{`Name: ${player.winnerName}, Date: ${player.date}, Duration: ${player.duration} sec`}</li>
        })
        :
        'loading...'
    )  
    
}
export default ScoreBoard;