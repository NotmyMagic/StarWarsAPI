import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/ViewCharacter";
import ViewCharacter from "./Pages/ViewCharacter";
import Characters from "./Pages/Characters";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Characters" element={<Characters />} />
        <Route path="/ViewCharacter/:id" element={<ViewCharacter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
