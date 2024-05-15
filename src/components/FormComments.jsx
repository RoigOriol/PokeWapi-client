import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


function FormComments() {
  const params = useParams()
  
  const navigate = useNavigate();
  
  const [comment, setComment] = useState("");
  const [pokemonId, setPokemonId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      comment,
      pokemonId: `${params.id}`,
    };

    console.log("Nuevo comentario:", newComment);

    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/chats`, newComment)
      .then(() => {
        console.log("Comentario creado correctamente");
        navigate("/FichaCharacterPage");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h3>Add Comment</h3>
      <form onSubmit={handleSubmit}>
        <label>Comentario:</label>
        <textarea
          type="text"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Submit</button>
        <button type="submit">Delete</button>
        <button type="submit">Edit</button>
      </form>
    </div>
  );
}

export default FormComments;
