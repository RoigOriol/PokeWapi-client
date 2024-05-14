import "./App.css"; // Importar el archivo CSS
import { Routes, Route } from "react-router-dom";
import CategoriasPage from "./pages/CategoriasPage";
import React from "react";
import Home from "./pages/Home";
import AllCharactersPage from "./pages/AllCharactersPage";


function App() {
  return (
    <Routes>
      <Route path="/CategoriasPage" element={<CategoriasPage />} />
      <Route path="/" element={<Home />} />
      
        <Route path="/AllCharactersPage" element={<AllCharactersPage />} />
      
      
    </Routes>
  );
}

export default App;
