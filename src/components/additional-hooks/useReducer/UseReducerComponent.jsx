import React, { useState, useReducer } from "react";

// const UseReducerComponent = () => {
//   const [num, setNum] = useState(0);
//   return (
// <>
// <button onClick={() => setNum(num + 1)}>{num}</button>
// </>  )
// }

// export default UseReducerComponent

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      break;
  }
}

const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <button onClick={() => dispatch({type: "INCREMENT"})}>{state}</button>
      <button onClick={() => dispatch({type: "DECREMENT"})}>{state}</button>
    </>
  );
};


export default UseReducerComponent;
