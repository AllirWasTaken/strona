import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Operations from "./Operations";
import Terminarz from "./About";
import About from "./About";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
