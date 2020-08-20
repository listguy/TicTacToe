import React from 'react';

function Timer(props) {
    const {currentTime, tick} = props;

    setTimeout(()=>{
        tick(currentTime +1);
    }, 1000);

    return (
        <>
        </>
    )

}

export default Timer;