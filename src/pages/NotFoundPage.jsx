import React from 'react';
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="notfound-container">
      <h2>Estas perdido</h2>
      
      <Link to={"/"}>
        <h5>click para volver</h5>
      </Link>
    </div>
  );
}

export default NotFoundPage;
