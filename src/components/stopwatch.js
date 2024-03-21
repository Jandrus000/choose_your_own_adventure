import React, {useEffect, useState, useRef} from "react";

export default function StopWatch()
{
const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timeHandler = useRef();

    useEffect(() => {
        if (isRunning) {
            startInterval();
        } else {
            clearInterval(timeHandler.current);
        }
        return () => clearInterval(timeHandler.current);
    }, [isRunning]);

    const startInterval = () => {
        timeHandler.current = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);
    };

    const handleRestart = () => {
        clearInterval(timeHandler.current);
        setTime(0);
        setIsRunning(false);
    };

    const handlePause = () => {
        setIsRunning(false);
    };

    const handlePlay = () => {
        setIsRunning(true);
    };

    return (
        <>
            <div className ="stopWatch">
            <h1>{time}</h1>

            <button onClick={handleRestart} className="btn btn-info">Restart</button>
            {!isRunning ? (
                <button onClick={handlePlay} className="btn btn-success">Play</button>
            ) : (
                <button onClick={handlePause} className="btn btn-danger">Pause</button>
            )}
            </div>
            
        </>
    );
}