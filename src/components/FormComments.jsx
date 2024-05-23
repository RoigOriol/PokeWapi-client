import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function FormComments(props) {
  console.log(props);
  console.log(props.chats);
  const params = useParams();

  const navigate = useNavigate();

  const [comment, setComment] = useState("");
  const [pokemonId, setPokemonId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      comment: comment,
      pokemonId: props.pokemonId,
    };

    console.log("Nuevo comentario:", newComment);

    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/chats`, newComment)
      .then(() => {
        console.log("Comentario creado correctamente");

        setComment("");

        props.getData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h5>Add Comment</h5>

      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div></div>
        <button class="button" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormComments;
