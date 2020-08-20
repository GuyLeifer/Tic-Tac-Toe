import React, { useEffect, useState, useDebugValue } from "react";
import "./Timer.css"

function Timer(props){
    const [timeElapsed,setTimeElapsed]=useState(0)
    const [intervalKey,setIntervalKey]=useState(null)
    
    const onInterval=() => {
        setTimeElapsed(gilad => gilad + 1)
    }

    useEffect(() => {
        if (!props.start) {
            clearInterval(intervalKey)
            setTimeElapsed(0)
            setIntervalKey(null)
        } else {
            setIntervalKey(setInterval(onInterval, 1000))
        }
    }, [props.start])
    return(

=======
    <div className="timer">{timeElapsed.toString().padStart(2,"0")}</div>
>>>>>>> 93463088526dbd1301543bcb927445e66b75862f
    )
}

export default Timer;