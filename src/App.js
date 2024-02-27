import "./App.css";
import Header from "./Components/Header/Header";
import SumeNav from "./Components/SumeNav/SumeNav";
import Sume from "./Components/Sume/Sume";
import { useState } from "react";
import Homepage from "./Components/Homepage/Homepage";
import "animate.css";
import SecondPageBody from "./Components/SecondPageBody/SecondPageBody";

function App() {
  const [HP, setHP] = useState(true);

  const handleHP = () => {
    setHP(!HP);
  };

  return (
    <>
      {HP ? (
        <>
          <Homepage></Homepage>
          <SecondPageBody></SecondPageBody>
        </>
      ) : (
        <>
          <Header />
          <div className="Body">
            <SumeNav />
            <Sume />{" "}
          </div>
        </>
      )}
      <button id="toggleButton" onClick={handleHP}>
        Go to PPage
      </button>
    </>
  );
}

export default App;
