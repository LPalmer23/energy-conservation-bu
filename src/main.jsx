// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Submit from "./pages/Submit";
import Charts from "./pages/Charts";
import LearnMore from "./pages/LearnMore";
import Contact from "./pages/Contact";
import ScrollToTop from './components/ScrollToTop';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </Router>
  </React.StrictMode>
);
