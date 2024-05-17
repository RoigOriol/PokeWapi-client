import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import FormComments from "../components/FormComments";
import { Spinner } from "react-bootstrap/esm";
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
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/pokemon/${
          params.pokemonCharacterId
        }`
      )
      .then((response) => {
        console.log(response);
        setCharacter(response.data);
        return axios
          .get(
            `${import.meta.env.VITE_SERVER_URL}/chats?pokemonId=${
              response.data.id
            }`
          )
          .then((response) => {
            setChat(response.data);
            console.log(response.data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (character === null) {
    console.log(character);
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  const deleteComment = (id, pokemonId) => {
    axios
      .delete(`${import.meta.env.VITE_SERVER_URL}/chats/${id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.log(error);
      }, []);
  };

  return (
    <div className="card">
      <div className="card-content">
        <h3>
          {character.name.charAt(0).toUpperCase() + character.name.slice(1)}
        </h3>

        <p>Height: {character.height / 10} m</p>
        <p>Weight: {character.weight} kg</p>
        <p>ID: {character.id}</p>

        <p>Type: {character.types[0].type.name}</p>

        <img
          src={character.sprites.front_default}
          style={{ height: "100px" }}
          alt="pokemon"
        />
      </div>
      <div className="card-comments">
        {chats.map((eachComment, index) => (
          <div key={index} data-id={eachComment.id}>
            <p>{eachComment.comment}</p>
            <button style={{borderRadius:"5px"}}
              onClick={() => deleteComment(eachComment.id, character.name)}
            >
              Delete
            </button>
            <br />
          </div>
        ))}
      </div>
      <FormComments pokemonId={character.id} getData={getData} chats={chats} />

      <Link to="/CategoriasPage">
        <button style={{ borderRadius: "5px" }}>Todos los tipos</button>
      </Link>
      <br />

      <Link to="/AllCharacterPage">
        <button style={{ borderRadius: "5px" }}>Back</button>
      </Link>
    </div>
  );
}

export default FichaCharacterPage;
