
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import FormComments from "../components/FormComments";

function FichaCharacterPage() {
  const [character, setCharacter] = useState(null);
  const [chats, setChat] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []); // []

  const getData = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/pokemon/${params.pokemonCharacterId}`)
      .then((response) => {
        console.log(response);
        setCharacter(response.data);   
        return axios
      .get(`${import.meta.env.VITE_SERVER_URL}/chats?pokemonId=${response.data.id}`)
      .then((response) => {
          setChat(response.data);
          console.log(response.data)
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };
///?id=${params.id}


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
        <p>{character.weight}</p>
        <p>{character.id}</p>
        <img height={300} src={character.sprites.front_default} alt="pokemon-image" />
      </div>
      {/* Aquí deberías usar .map para renderizar los comentarios */}
      {chats.map((eachComment) => {
        return <p>{eachComment.comment}</p>
        
        
        
      })}

      <FormComments pokemonId={character.id} getData={getData} chats={chats}/>
      
      <Link to="/CategoriasPage">
        <button>Atràs</button>
      </Link>
    </div>
  );
}

export default FichaCharacterPage;


