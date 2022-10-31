import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/css/index.css";
import Header from "./components/Header";
import Home from "./pages/Home"
import Work from "./pages/work/Work";
import Contact from "./pages/Contact";
import Agency from "./pages/Agency";
import Services from "./pages/Services";

function App() {
  return (
    <div className="font-sansation bg-dark text-light min-h-[100vh]">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/agency" element={<Agency/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
  </div>
  )
}

export default App;
