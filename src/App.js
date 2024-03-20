import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SecondPageBody from "./Components/SecondPageBody/SecondPageBody";
import Sume from "./Components/Sume/Sume";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SecondPageBody />} />
        <Route path="/sume" element={<Sume />} />
      </Routes>
    </Router>
  );
}

export default App;
