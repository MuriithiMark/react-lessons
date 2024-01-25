import { useEffect } from "react";
import "./App.css";
import Parent from "./components/PassData";
import ToggleComp from "./components/ToggleComp";
import Ancestor from "./components/LiftingUpState/Ancestor";

function App() {

  return (
    <>
      <ToggleComp />
      <Parent />
      <br />
      <Ancestor />
    </>
  );
}

export default App;
