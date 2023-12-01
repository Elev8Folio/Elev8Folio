import "./App.css";
import Header from "./Components/Header";
import SumeNav from "./Components/SumeNav";
import Sume from "./Components/Sume";
import { useState } from "react";
import Homepage from "./Components/Homepage";
import Step1 from "./Components/Step1";
import "animate.css";

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
          <Step1></Step1>
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
      <button onClick={handleHP}>Go to PPage</button>
    </>
  );
}

export default App;
