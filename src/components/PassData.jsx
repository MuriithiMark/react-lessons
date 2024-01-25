import React from "react";
import { useState } from "react";

function Parent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <span>Counter Value in parent: {count}</span>
      <div
        className="actions"
        style={{ display: "flex", justifyContent: "center", gap: "10px" }}
      >
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <Child count={count} />
    </>
  );
}

function Child({ count }) {
  return (
    <>
      <span>Counter Value in Child: {count}</span>
    </>
  );
}

export default Parent;
