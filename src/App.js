import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ViewCharacter from "./Pages/ViewCharacter";
import Characters from "./Pages/Characters";
import ViewPlanet from "./Pages/ViewPlanet";
import Planets from "./Pages/Planets";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Characters" element={<Characters />} />
        <Route path="/ViewCharacter/:id" element={<ViewCharacter />} />
        <Route path="/Planets" element={<Planets />} />
        <Route path="/ViewPlanet/:id" element={<ViewPlanet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
