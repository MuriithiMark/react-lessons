import { useState } from "react";
import "./App.css";
import Button_component, { Button_class_component } from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = () => setIsOpen(true);
  const handleClosePopup = () => setIsOpen(false);

  const popup = {
    display: isOpen ? "flex" : "none",
    flexDirection: 'column',
    position: isOpen && "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    width: "100vw",
    height: "100vh",
  };

  return (
    <>
      <div style={popup}>
        <button
          onClick={handleClosePopup}
          style={{
            width: "100px",
            height: "40px",
            backgroundColor: "white",
            color: "black",
            margin: '4%'
          }}
        >
          Close
        </button>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <form>
            <label>Username</label>
            <input type="text" />
            <label>Password</label>
            <input type="text" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <button onClick={handleOpenPopup}>Open</button>
      <Button_class_component btnName="Class Btn" btnColor="red" />
      <Button_component btnName="Func Btn" btnColor="blue" />
    </>
  );
}

export default App;
