import React from "react";

function CounterDisplay({ count }) {
  return (
    <div>
    <span>Count is {count}</span>
    </div>
  );
}

function CounterIncrement({ handleIncrement }) {
  return <button onClick={handleIncrement}>Increment</button>;
}

function CounterDecrement({ handleDecrement }) {
  return <button onClick={handleDecrement}>Decrement</button>;
}

export { CounterDisplay, CounterDecrement, CounterIncrement };
