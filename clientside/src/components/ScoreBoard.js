import React, { useEffect, useState } from 'react';
const axios = require('axios');

function ScoreBoard(props) {
    const [scores, setScores] = useState([]);
    const {duration} = props;
    
    useEffect(()=>{
        async function getScores() {
            try{
                const {data} = await axios.get('/api/scores');
                if(data.length !== scores.length) {
                    console.log("fetched");
                    setScores(data);
                }
            } catch(e) {
                alert(`${e} has occurred`);
            }
        }
        if(duration === 0)
        {
            getScores();
        }
    },);

    return (
        <>
        <h2>Holly Winners List</h2>
        {scores ?
        scores.map((player, i) => {
        return <li key={`sb${i}`}>{`Name: ${player.winnerName}, Date: ${player.date}, Duration: ${player.duration} sec`}</li>
        })
        :
        'loading...'}
        </>
    )  
    
}
export default ScoreBoard;