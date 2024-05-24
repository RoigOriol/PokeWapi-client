import React, { useState } from "react";
import axios from "axios";

function CommentItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [textareaInput, setTextareaInput] = useState(props.comment.comment);

  console.log(props.comment);

  const deleteComment = (id) => {
    axios
      .delete(`${import.meta.env.VITE_SERVER_URL}/chats/${id}`)
      .then(() => {
        props.getData();
      })
      .catch((error) => {
        console.log(error);
      }, []);
  };

  const saveComment = (id) => {
    axios
      .patch(`${import.meta.env.VITE_SERVER_URL}/chats/${id}`, {
        comment: textareaInput,
      })
      .then(() => {
        props.getData();
        setIsEditing(false);
      })
      .catch((error) => {
        console.log(error);
      }, []);
  };

  return (
    <div>
      {!isEditing ? (
        <p>{props.comment.comment}</p>
      ) : (
        <textarea
          onChange={(e) => setTextareaInput(e.target.value)}
          value={textareaInput}
        />
      )}
      {!isEditing ? (
        <button class="button" onClick={() => setIsEditing(true)}>
          Editar
        </button>
      ) : (
        <>
          <button class="button" onClick={() => saveComment(props.comment.id)}>
            Guardar
          </button>
          <button class="button" onClick={() => setIsEditing(false)}>
            cerrar
          </button>
        </>
      )}
      <button class="button" onClick={() => deleteComment(props.comment.id)}>
        Delete
      </button>
    </div>
  );
}

export default CommentItem;
