import React from 'react';
import '../scoreBoard.css';

function ScoreBoard(props) {
    return (props.score === 6 ? <div className='scoreBoard'> <h1>Wonderful stuff</h1> <h1>Score: {props.score}</h1> <button onClick={props.restart}>Play Again</button> </div>
        : props.moves > 0 ? <div className='scoreBoard'> <h1>Moves remaining: {props.moves}</h1> <h1>Score: {props.score}</h1> <button onClick={props.restart}>Restart Game</button> </div>
            : <div className='scoreBoard'> <h1>Keep Trying! </h1><button onClick={props.restart}>Try Again</button></div>);
}

export default ScoreBoard;