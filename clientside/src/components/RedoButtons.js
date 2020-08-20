import React from 'react';

function RedoButtons (props) {
    const {history , redo} = props;

    return (
        <>
        {history[1] !== undefined ?  
        history.slice(1).map((bs,i) => {
            return <button key={`RB${i}`} className="redoButton" onClick={() => redo(i+1, bs)}>{`Go To #${i}`}</button>
        })
        :
        ''
        }
        </>
    )
}

export default RedoButtons;