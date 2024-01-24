import { useState } from "react";
import "./App.css";
import { Button_class_component, Button_component } from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button_component btnName="Func Comp Add" btnColor="red" />
      <Button_class_component btnName="Class Comp. Add" btnColor="blue" />
    </>
  );
}

export default App;
