import React, { useState, useEffect, useRef } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const startPauseToggle = () => {
    setIsRunning((prevState) => !prevState);
  };

  const resetCounter = () => {
    setIsRunning(false);
    setCount(0);
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={startPauseToggle}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}

export default Counter;
