import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Pages/Header";
import Home from "./components/Pages/Home.jsx";

import Footer from "./components/Pages/Footer";
import SmartAgriculture from "./components/Pages/Solutions/SmartAgriculture.js";
import Smartcity from "./components/Pages/Solutions/SmartCity.jsx";
import SmartFactory from "./components/Pages/Solutions/SmartFactory.jsx"

function App() {
  return (
    <>
  <Router>
  <Navbar />
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Other pages */}
        <Route path="/Solutions/SmartFactory" element={<SmartFactory />} />
        <Route path="/Solutions/SmartCity" element={<Smartcity/>} />
        <Route path="/Solutions/SmartAgriculture" element={<SmartAgriculture />} />
      </Routes>
      <Footer />
    </Router>
  
    </>
  );
}

export default App;
