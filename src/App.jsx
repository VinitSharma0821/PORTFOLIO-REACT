import React from "react";
import "./App.css";
import Nav from "./pages/Nav";
import Header from "./pages/Header";
import Work from "./pages/Work";
import Slider from "./pages/Slider";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nav" element={<Nav />} />
          <Route path="/header" element={<Header />} />
          <Route path="/work" element={<Work />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
