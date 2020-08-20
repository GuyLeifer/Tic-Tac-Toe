import React, {useState } from 'react';
import Game from './components/Game';
import './style.css';
import Timer from "./components/Timer";

const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none',
    textAlign: 'center',
    width: '200px',
    margin: '30px auto'  
}


const App = () => {
    const [startTimer,setTimer]=useState(false)
    return (
        <>
            <h1 style={style}>Tic - Tac - Toe</h1>
            <Timer start={startTimer}/>
            <Game timer={(state)=>setTimer(state)} start={startTimer}/>
        </>
    )
 };
export default App;
