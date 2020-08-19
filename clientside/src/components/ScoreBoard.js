import React, { useEffect, useState } from 'react';

function ScoreBoard(props) {
    // let scores;
    const [scores, setScores] = useState([]);
    // const [loading, setLoading] = useState(true);
    // let loading = false;
    
    useEffect(async ()=>{
        let data = await axios.get('/api/scores');
        setScores(data);
    },[]);

    return (
        loading ?
        scores.map(player => {
        return <div>{player.JSON.stringify()}</div>
        })
        :
        'loading...'
    )
    
    
}