import React, { useEffect, useState} from "react";
import { Link,  useNavigate  } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

function AllCharactersPage() {
  const type = useParams();
  const navigate = useNavigate();
  const [pokemonList, setPokemonList] = useState([]);
  console.log(type);
  useEffect(() => {
    axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/type/${type.pokemonTypeId}?limit=18`)
    .then((response) => {
      console.log(response.data);
      setPokemonList(response.data.pokemon.slice(0, 18));
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
             
            <Link to={`/FichaCharacterPage/${eachPokemon.pokemon.name}`}style={{ textDecoration: 'none', color: 'inherit' }}>
            
              <p><strong>
                {eachPokemon.pokemon.name.charAt(0).toUpperCase() +
                  eachPokemon.pokemon.name.slice(1)}
              </strong></p>
            </Link>
            
          </div>
         
        ))}
       </div>
       <button class="button"onClick={() => navigate(-1)} >
        Back
      </button>
    </div>
  );
}

export default AllCharactersPage;
