import { useRef } from "react";
import "./App.css";
import UseReducerComponent from "./components/additional-hooks/useReducer/UseReducerComponent";
import UseRefComponent from "./components/additional-hooks/useRef/UseRefComponent";

function App() {
  const docRef = useRef();

  return (
    <>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", columnGap: "20px" }}
        ref={docRef}
      >
        {Array(40)
          .fill(1)
          .map((num, idx) => (
            <UseReducerComponent key={num + idx} />
          ))}
      </div>
      <UseRefComponent docRef={docRef} />
    </>
  );
}

export default App;
