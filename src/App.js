import "./App.css";
import Header from "./Components/Header";
import SumeNav from "./Components/SumeNav";
import Sume from "./Components/Sume";
import { useState } from "react";
import Homepage from "./Components/Homepage";

function App() {
  const [HP, setHP] = useState(true);

  const handleHP = () => {
    setHP(!HP);
  };

  return (
    <>
      <button onClick={handleHP}>Go to PPage</button>

      {HP ? (
        <Homepage></Homepage>
      ) : (
        <>
          <Header />
          <div className="Body">
            <SumeNav />
            <Sume />{" "}
          </div>
        </>
      )}
    </>
  );
}

export default App;
