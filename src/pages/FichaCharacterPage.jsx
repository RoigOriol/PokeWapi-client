import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import FormComments from "../components/FormComments";
import { Spinner } from "react-bootstrap/esm";
import Comment from "../components/Comment";

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
       

        <img
          src={character.sprites.front_default}
          style={{ height: "200px" }}
          alt="pokemon"
        />

        <Comment chats={chats} getData={getData} />
        <FormComments
          pokemonId={character.id}
          getData={getData}
          chats={chats}
        />
      </div>
      <Link to="/CategoriasPage">
        <button className="button">All types</button>
      </Link>
      <br />

      <button className="button" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}

export default FichaCharacterPage;
