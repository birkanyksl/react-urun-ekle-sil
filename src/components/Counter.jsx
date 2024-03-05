import React, { useState } from "react";
import "./Counter.css"

const Counter = () => {
  
  const [counter, setCounter] = useState(0);
  

  return (
    <div className="counterDiv">
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <p>{counter}₺</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default Counter;
