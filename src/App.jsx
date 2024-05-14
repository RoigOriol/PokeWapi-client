import "./App.css"; // Importar el archivo CSS
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import CategoriasPage from "./pages/CategoriasPage";
import AllCharactersPage from "./pages/AllCharactersPage";
import FichaCharacterPage from "./pages/FichaCharacterPage";
function App() {
  return (
    <Routes>
      <Route path="/CategoriasPage" element={<CategoriasPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/pokemon-por-tipo/:pokemonTypeId" element={<AllCharactersPage />} />
      <Route path="/FichaCharacterPage/:pokemonCharacterId" element={<FichaCharacterPage />} />
    </Routes>
  );
}

export default App;
