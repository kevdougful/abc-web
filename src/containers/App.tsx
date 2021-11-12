import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "../components/navbar";
import { Home, About } from ".";

export default () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};
