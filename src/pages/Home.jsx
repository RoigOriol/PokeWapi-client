
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="portada">
      <div className="portada-btn">
        <Link to={"/CategoriasPage"}>
          <img src="/assets/images/pokeball-logo.png" alt="pokeball" width={80} />
        </Link>
      </div>
    </div>
  );
}

export default Home;