import { useEffect } from "react";
import {
  CounterDisplay,
  CounterDecrement,
  CounterIncrement,
} from "./LiftingState";
import { useState } from "react";

const Ancestor = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  useEffect(() => {
    window.addEventListener("keypress", (event) => {
      if (event.key === "+" && event.shiftKey) {
        handleIncrement();
      }

      if (event.key === "-" && event.shiftKey) {
        handleDecrement();
      }
    });
    console.log("madness");
  });

  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: "1px solid blue",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "4px",
      }}
    >
      <CounterDisplay count={count} />
      <CounterIncrement handleIncrement={handleIncrement} />
      <CounterDecrement handleDecrement={handleDecrement} />
    </div>
  );
};

export default Ancestor;
