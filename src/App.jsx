import "./App.css";
import UserContextProvider from "./contexts/UserContext.provider";
import Login from "./components/Login";
import Profile from "./components/Profile";
import SolvingPropsDrillingWithContext from "./components/SolvingPropsDrillingWithContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>

      <SolvingPropsDrillingWithContext />
    </>
  );
}

export default App;
