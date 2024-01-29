import { useState } from "react";
import "./App.css";
import Button_component, { Button_class_component } from "./components/Button";
localStorage.setItem("count", 20)
function App() {
  const [count, setCount] = useState(() => localStorage.getItem("count"));

  console.log(count)
  return (
    <>
      <Button_class_component btnName="Class Btn" btnColor="red" />
      <Button_component btnName="Func Btn" btnColor="blue" />
    </>
  );
}

export default App;
