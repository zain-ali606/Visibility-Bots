import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Pages/Header";
import Home from "./components/Pages/Home.jsx";

import Footer from "./components/Pages/Footer";
import SmartAgriculture from "./components/Solutions/SmartAgriculture";
import Smartcity from "./components/Solutions/SmartCity";
import SmartFactory from "./components/Solutions/SmartFactory"

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
