import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

function AllCharactersPage() {
  const type = useParams();

  const [pokemonList, setPokemonList] = useState([]);
  console.log(type);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/type/${type.pokemonTypeId}`)
      .then((response) => {
        console.log(response);
        setPokemonList(response.data.pokemon);
      });
  }, []);

  if (pokemonList === null) {
    console.log(pokemonList);
    return <p>esperando</p>;
  }

  return (
    <div className="categorias-container">
      <div className="categorias-grid">
        {pokemonList.map((eachPokemon, i) => (
          <div  className="categoria-item"key={i}>
            <Link to={`/FichaCharacterPage/${eachPokemon.pokemon.name}`}>
              <p>
                {eachPokemon.pokemon.name.charAt(0).toUpperCase() +
                  eachPokemon.pokemon.name.slice(1)}
              </p>
            </Link>
          </div>
        ))}
      </div>
      
        <Link to={`/CategoriasPage`}>
          <button className="button">Volver</button>
        </Link>
        <footer className="footer">
      </footer>
    </div>
  );
}
console.log();
export default AllCharactersPage;
