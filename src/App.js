import React from "react";
import "./App.css";
import Navbar from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import Products from "./components/pages/Products/Products";
import ContactUs from "./components/pages/ContactUs/ContactUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/categories/:name" element={<Products />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
