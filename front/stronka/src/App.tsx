import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Galeria from "./Galeria";
import Terminarz from "./Terminarz";
import Cennik from "./Cennik";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/cennik" element={<Cennik />} />
        <Route path="/terminarz" element={<Terminarz />} />
      </Routes>
    </Router>
  );
};

export default App;
