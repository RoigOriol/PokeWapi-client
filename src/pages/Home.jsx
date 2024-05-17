
import React from 'react';
import { Link } from 'react-router-dom';
import pokeBall from "../assets/images/pokeball-logo.png"

function Home() {
  return (
    <div className="portada">
      <div className="portada-btn">
        <Link to={"/CategoriasPage"}>
          <img src={pokeBall} alt="pokeball" width={80} />
        </Link>
      </div>
    </div>
  );
}

export default Home;