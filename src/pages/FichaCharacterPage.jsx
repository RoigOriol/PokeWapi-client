import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import FormComments from "../components/FormComments";

function FichaCharacterPage() {
  const [character, setCharacter] = useState(null);
  const params = useParams();
  
  //lo necesitaremos para volver atras en la `pagina
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/pokemon/${
          params.pokemonCharacterId
        }`
      )
      .then((response) => {
        console.log(response);
        setCharacter(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.character]);
  if (character === null) {
    console.log(character);
    return <p>esperando</p>;
  }
  
  return (
    <div>
      <div>Ficha DE UN POKEMON</div>
      <div>
    
        <h3>{character.name}</h3>
        <p>{character.height/10}</p>
        <p>{character.wheight}</p>
        <img height={300} src={character.sprites.front_default} alt="pokemon-image" />
      </div>
   <FormComments />
        <button>Atràs</button>
    </div>
  );
}

export default FichaCharacterPage;
