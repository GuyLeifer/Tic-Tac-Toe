import React, {useState } from 'react';
import Game from './components/Game';
import './style.css';
import Timer from "./components/Timer";

const App = () => {
    const [startTimer,setTimer] = useState(false);
    return (
        <>
            <h1>Tic - Tac - Toe</h1>
            <Timer start={startTimer}/>
            <Game timer={(state)=>setTimer(state)}/>
        </>
    )
 };
export default App;
