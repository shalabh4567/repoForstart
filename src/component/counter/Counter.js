import React, { useState, useRef } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const subtract = () => {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  };

  const add = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter" style={{ width: "100%", display: "flex" }}>
      <i className="fa-solid fa-minus" onClick={subtract}></i>
      <span className="number">{count}</span>
      <i className="fa-solid fa-plus" onClick={add}></i>
    </div>
  );
};

export default Counter;
