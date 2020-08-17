import React from 'react';

function RedoButtons (props) {
    const {history , redo} = props;

    return (
        <>
        {history[0] !== undefined ?  
        history.map((bs,i) => {
            return <button className="redoButton" onClick={() => redo(i, bs)}>{`Go To #${i}`}</button>
        })
        :
        ''
        }
        </>
    )
}

export default RedoButtons;