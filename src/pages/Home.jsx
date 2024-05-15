import React from 'react';
import { Link } from 'react-router-dom';



function Home() {
  return (
    <div className="portada img">
      <img src="src/assets/images/portada-background.png" alt="portada" />
      
      <div className="portada-btn">
        <Link to={"/CategoriasPage"}>
        <img src= "src/assets/images/pokeball-logo.png"   alt="pokeball" width={60} />
        </Link>
      </div>
    </div>
  );
}

export default Home;
