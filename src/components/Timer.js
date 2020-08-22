import React, { useEffect, useState, useDebugValue } from "react";
import "./Timer.css";

function Timer(props){
    const [timeElapsed,setTimeElapsed] = useState(0)
    const [intervalKey,setIntervalKey] = useState(null)
    
    const onInterval = () => {
        setTimeElapsed(currentTime => currentTime + 1)
    }

    useEffect(() => {
        if (!props.start) {
            clearInterval(intervalKey);
            setTimeElapsed(0);
            setIntervalKey(null);
        } 
        else {
            setIntervalKey(setInterval(onInterval, 1000))
        }
    }, [props.start]);
    
    return(

    <div className="timer">Game Time: {timeElapsed.toString().padStart(2,"0")}'s</div>
    )
}

export default Timer;