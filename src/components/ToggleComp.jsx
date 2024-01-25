import React from "react";
import { useState } from "react";

const ToggleComp = () => {
  const [state, setState] = useState(false);
  const handleClick = () => setState(!state);

  return (
    <div>
      <button onClick={handleClick} style={{margin: '10px'}}>Toggle</button>
      <span>{state ? "ON".padEnd(3, " ") : "OFF"}</span>
    </div>
  );
};

export default ToggleComp;
