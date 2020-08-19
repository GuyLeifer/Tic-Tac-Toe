import React from 'react';
import Game from './components/Game';

const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none',
    
}


const App = () => {
    return (
        <>
            <h1 style={style}>Tic - Tac - Toe</h1>
            <Game />
        </>
    )
 };
export default App;
