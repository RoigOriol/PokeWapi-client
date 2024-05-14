import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

function AllCharactersPage() {
  const type = useParams();
 
  const [pokemonList, setPokemonList] = useState([]);
   console.log(type)
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/type/${type.pokemonTypeId}`)
    .then((response)=>{
      console.log(response);
      setPokemonList(response.data.pokemon)
    })
  },[])

  if (pokemonList === null) {
    console.log(pokemonList)
    return <p>esperando</p>
  }

  return (
    <div>
      <h1>TODA LA LISTA de UN solo tipo</h1>
      {pokemonList.map((eachPokemon, i)=>{
console.log(eachPokemon) 
        return (
          <div key={i}>


          <Link to={`/FichaCharacterPage/${eachPokemon.pokemon.name}`}>
          
          <h3>{eachPokemon.pokemon.name}</h3>

          </Link>

          </div>
        )

      })}
    </div>
  );
}

export default AllCharactersPage;
