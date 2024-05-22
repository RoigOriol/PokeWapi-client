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
    <div className="body-ficha-caracter">
      <div className="ficha-caracter">
        <h3>
          {character.name.charAt(0).toUpperCase() + character.name.slice(1)}
        </h3>
  
        <p>
          <strong>Height:</strong> {character.height / 10} m
        </p>
        <p>
          <strong>Weight: </strong>
          {character.weight} kg
        </p>
        <p>
          <strong>ID:</strong> {character.id}
        </p>
        <p>
          <strong>Type: </strong>
          {character.types[0].type.name}
        </p>
  
        <img
          src={character.sprites.front_default}
          style={{ height: "200px" }}
          alt="pokemon"
        />
  
        <div className="card-comments">
          {chats.map((eachComment, index) => (
            <div key={index} data-id={eachComment.id}>
              <p>{eachComment.comment}</p>
              <button
                style={{ borderRadius: "5px" }}
                onClick={() => deleteComment(eachComment.id, character.name)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
  
        <FormComments
          pokemonId={character.id}
          getData={getData}
          chats={chats}
        />
      </div>
      <Link to="/CategoriasPage">
        <button style={{ borderRadius: "5px" }}>Todos los tipos</button>
      </Link>
      <br />
  
      <button onClick={() => navigate(-1)} style={{ borderRadius: "5px" }}>
        Back
      </button>
    </div>
  );
  
  
}

export default FichaCharacterPage;
