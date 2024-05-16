import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


function FormComments(props) {
  const params = useParams()
  
  const navigate = useNavigate();
  
  const [comment, setComment] = useState("");
  const [pokemonId, setPokemonId] = useState("");
  //recoger de FichaCharacter la url de vuelta y el characterId/pokemonId
  //comprobar si estan incluidos en params y como llegar a ellos
  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      comment,
      pokemonId, 
    };
      //console.log(params.pokemonCharacterId)
    console.log("Nuevo comentario:", newComment);

    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/chats`, newComment)
      .then(() => {
        console.log("Comentario creado correctamente");
        //limpiamos box comentario despues de enviado
        setComment("");
        //navigate("/FichaCharacterPage");
        //corregir navigate para volver a pagina org de FichaCharacterPage
        props.getData()
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
    <div>
      {/*aqui recibimos todos los comentarios, los traemos
      a traves del componente Comentarios?*/}
      <h2>Todos los comentarios</h2>
      <textarea>
        
        
      </textarea>
    </div>
        <button type="submit">Submit</button>
        <button type="submit">Delete</button>
        <button type="submit">Edit</button>
      </form>
    </div>
  );
}

export default FormComments;
