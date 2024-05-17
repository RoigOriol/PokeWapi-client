import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CategoriasPage() {
  const [categorias, setCategorias] = useState(null);

  const params = useParams();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/type`)
      .then((response) => {
        console.log(response);
        setCategorias(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (categorias === null) {
    return <h3>... cargando</h3>;
  }

  return (
<div className="categorias-container">
  <div className="categorias-grid">
    {categorias.map((eachCategoria, i) => {
      console.log(eachCategoria.name);
      return (
        <div key={i} className="categoria-item">
          <Link to={`/pokemon-por-tipo/${eachCategoria.name}`}>
            <div key={eachCategoria.name}>
              <img src={`images/${eachCategoria.name}-logo.png`} alt="pokeball" width={60} />
              <p>{eachCategoria.name}</p>
            </div>
          </Link>
        </div>
      );
    })}
  </div>
  <Link to="/">
    <button className="button">Home</button>
  </Link>
</div>

  );
}

export default CategoriasPage;
