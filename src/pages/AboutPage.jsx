import React from "react";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <div className="about-body">
      <div className="about-container">
        <h2>Marcos</h2>
        <p>
          Marcos creció en una ciudad en Unova, fascinado por las historias de
          entrenadores y batallas épicas. Con su primer Pokémon, un Snivy,
          recorrió Unova ganando medallas y demostrando su inteligencia
          estratégica. Su pasión por la aventura lo llevó a conocer a Oriol, con
          quien compartía el sueño de descubrir todos los Pokémon del mundo.
        </p>
      </div>
      <div className="about-container2">
        <h2>Oriol</h2>
        <p>
          Oriol, originario de una aldea en Johto, mostró desde joven un gran
          interés por los Pokémon. Comenzó su aventura con un Cyndaquil y, tras
          conquistar la Liga Pokémon de Johto, decidió explorar el mundo en
          busca de Pokémon raros y exóticos. Su amor por la naturaleza y su
          espíritu aventurero lo llevaron a unirse a Marcos.
        </p>
      </div>
      <Link to={`/CategoriasPage`}>
        <button className="button">All types</button>
      </Link>
    </div>
  );
}

export default AboutPage;
