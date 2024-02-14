import "./App.css";
import { decrement, increment } from "./lib/features/counter/counterSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <div className="add-by-payload">
        {/* <input type="number" name="payload" id="add_to_count" value={}/> */}
      </div>
    </>
  );
}

export default App;
