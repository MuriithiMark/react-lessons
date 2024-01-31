import { useState } from "react";
import CounterContextProvider from "../contexts/CounterContext.provider";
import { useContext } from "react";
import CounterContext from "../contexts/CounterContext";

const Super = () => {
  console.log("Master re-render");

  return <p>Master Re-render</p>;
};

const Counter = () => {
  const { count, setCount } = useContext(CounterContext);

  return (
    <>
      {" "}
      <div>Counter: {count}</div>
    </>
  );
};

export const AddOneBTn = () => {
  const { count, setCount } = useContext(CounterContext);
  return <button onClick={() => setCount(count + 1)}>ADD</button>;
};

export const UnfortunateRender = () => {
  console.log("Rendered: UnfortunateRender.comp");
  return <div>UnfortunateRender</div>;
};

const SolvingPropsDrillingWithContext = () => {
  const [count, setCount] = useState(0);
  return (
    <CounterContextProvider value={{ count, setCount }}>
      <div>
        <Counter />
        <Super />
      </div>
      <AddOneBTn />
      <UnfortunateRender />
    </CounterContextProvider>
  );
};

export default SolvingPropsDrillingWithContext;
