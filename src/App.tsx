import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { ChakraProvider, Box, Stack } from "@chakra-ui/react";

import { Navbar } from "./components/navbar";
import { Home, About } from "./pages";

export default () => {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};
