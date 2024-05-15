
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="portada-img">
        
      </div>
      <div className="portada-btn">
        <Link to={"/CategoriasPage"}>
          <img src="/assets/images/pokeball-logo.png" alt="pokeball" width={60} />
        </Link>
      </div>
    </div>
  );
}

export default Home;
