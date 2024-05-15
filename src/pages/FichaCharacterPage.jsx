import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function FichaCharacterPage() {
  const [character, setCharacter] = useState(null);
  const params = useParams();
  console.log(params);
  console.log(character);
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
      </div>
    </div>
  );
}

export default FichaCharacterPage;
