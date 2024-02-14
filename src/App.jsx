import "./App.css";
import useStore from "./lib/useStore";
import AlertComp from "./components/AlertComp";

function App() {
  const [store, dispatch] = useStore('count');

  console.log('App render')

  return (
    <>
      <button onClick={() => dispatch({ type: "counter/increment" })}>
        INCREMENT
      </button>
      <p>{store.count}</p>
      <button onClick={() => dispatch({ type: "counter/decrement" })}>
        DECREMENT
      </button>

      <br />
      <AlertComp />
    </>
  );
}

export default App;
