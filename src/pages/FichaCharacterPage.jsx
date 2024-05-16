
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
  }, []);

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



  if (character === null) {
    console.log(character);
    return <p>esperando</p>;
  }

  const deleteComment = (id,pokemonId) => {
          
    axios.delete(`${import.meta.env.VITE_SERVER_URL}/chats/${id}`)
      .then(() => {
        navigate(0)
      })
      .catch((error) => {
        console.log(error);
      },[]);
  
};
console.log(character.id)
  return (
    <div className="card">
    <div className="card-content">
    <h3>{character.name.charAt(0).toUpperCase() + character.name.slice(1)}</h3>

      <p>Height: {character.height/10} m</p>
      <p>Weight: {character.weight} kg</p>
      <p>ID: {character.id}</p>
      
      <p>Type: {character.type}</p>
      <img src={character.sprites.front_default} alt="pokemon" />
    </div>
    <div className="card-comments">
      {chats.map((eachComment, index) => (
        <div key={index} data-id={eachComment.id}>
          <p>{eachComment.comment}</p>
          <button onClick={() => deleteComment(eachComment.id, character.name)}>Delete</button>
        </div>
      ))}
    </div>
    <FormComments pokemonId={character.id} getData={getData} chats={chats}/>
    <div className="back-button">
      <Link to="/CategoriasPage">
        <button>Back</button>
      </Link>
    </div>
  </div>
  );
}

export default FichaCharacterPage;


