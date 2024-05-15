import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//https://pokeapi.co/api/v2/pokemon/{{nombre o id del Pokémon}}

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
    <div>
      <h1>LISTA de todos los tipos</h1>
      <div>
        {/* Aquí va la lista de todos los tipos de pokemon */}
        {categorias.map((eachCategoria, i) => {
          console.log(eachCategoria);
          console.log(params);
          return (
            <div key={i}>
              <Link to={`/pokemon-por-tipo/${eachCategoria.name}`}>
                <div key={eachCategoria.name}>
                <img src= "src/assets/images/pokeball-logo.png"   alt="pokeball" width={60} ></img>
                  <p>{eachCategoria.name}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoriasPage;
