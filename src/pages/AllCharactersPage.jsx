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
    <div>
      <div className="pokemon-list-container">
        {pokemonList.map((eachPokemon, i) => (
          <div className="pokemon-list" key={i}>
            <Link to={`/FichaCharacterPage/${eachPokemon.pokemon.name}`}>
              <h5>
                {eachPokemon.pokemon.name.charAt(0).toUpperCase() +
                  eachPokemon.pokemon.name.slice(1)}
              </h5>
            </Link>
          </div>
        ))}
      </div>
      <footer className="footer">
        <Link to={`/CategoriasPage`}>
          <button className="button">Volver</button>
        </Link>
      </footer>
    </div>
  );
}
console.log();
export default AllCharactersPage;
