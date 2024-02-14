import React from "react";
import useStore from "../lib/useStore";

const AlertComp = () => {
  const [{ alert: { visible, message}}, dispatch ] = useStore();

console.log('Alert Comp render')

  return (
    <div>
      {visible && <p><b>{message}</b></p>}
      <button onClick={() => dispatch({ type: "alert/show", payload: { message: 'hello there'} })}>
        SHOW ALERT
      </button>
      <button onClick={() => dispatch({ type: "alert/hide" })}>
        HIDE ALERT
      </button>
    </div>
  );
};

export default AlertComp;
