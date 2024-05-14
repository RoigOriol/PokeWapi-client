import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function FichaCharacterPage() {
  const [character, setCharacter] = useState([]);
  const params = useParams();
 
 
 //lo necesitaremos para volver atras en la `pagina
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/people/${params.characterID}`)
      .then((response) => {
        console.log(response);
        setCharacter(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.id]); // Agregamos params.id como dependencia del useEffect

  return (
    <div>
      <div>FichaCharacterPage</div>
      {character.map((eachCharacter) => {
        return <li key={eachCharacter.id}>{eachCharacter.id}</li>;
      })}
    </div>
  );
}

export default FichaCharacterPage;
