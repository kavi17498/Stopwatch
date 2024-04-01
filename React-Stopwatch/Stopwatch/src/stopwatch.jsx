import React, { useState, useEffect, useRef } from "react";

function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elaspsedTime, setElapsedTme] = useState(0);
    const IntervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            IntervalIdRef.current = setInterval(() => {
                setElapsedTme(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(IntervalIdRef.current);
        };
    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elaspsedTime;
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTme(0);
        setIsRunning(false);
    }

    function formatTime() {
        let hours = Math.floor(elaspsedTime / (1000 * 60 * 60));
        let minutes = Math.floor((elaspsedTime / (1000 * 60)) % 60);
        let seconds = Math.floor((elaspsedTime / 1000) % 60);
        let miliseconds = Math.floor((elaspsedTime % 1000) / 10);

        return `${minutes}:${seconds}:${miliseconds}`;
    }

    return (
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={start} className="start-button">
                    Start
                </button>
                <button onClick={stop} className="stop-button">
                    Stop
                </button>
                <button onClick={reset} className="reset-button">
                    Reset
                </button>
            </div>
            <center className="name">Dev By Kavindu Lakshan</center>
        </div>
    );
}

export default Stopwatch;
