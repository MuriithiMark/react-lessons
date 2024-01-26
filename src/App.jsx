import { useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import ProgressInput from "./components/ProgressInput";

function App() {
  const [progress, setProgress] = useState(0);
  const handleChange = (event) => {
    setProgress(event.target.value);
  };
  return (
    <>
      <h1>Progress bar</h1>
      <ProgressBar progress={progress} />
      <ProgressInput value={progress} onChange={handleChange} />
    </>
  );
}

export default App;
