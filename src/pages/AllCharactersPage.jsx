import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllCharactersPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/type`)
      .then((response) => {
        console.log(response);
        setCharacters(response.data.results);
        console.log(response.data.results) 
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>TODA LA LISTA DE PERSONAJESsegun el tipo AQUI</h1>
      <div>
        {/* Aquí va la lista de personajes */}
        {characters.map((eachCharacter) => {
          console.log(eachCharacter);

          return (
            <div key={eachCharacter.name}>
              <p>{eachCharacter.name}</p>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllCharactersPage;
