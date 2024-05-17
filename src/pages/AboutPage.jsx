import React from 'react'
import { Link } from "react-router-dom";
function AboutPage() {
  
    return (
        <div> 
          <h1>About page</h1>
         <Link to={`/CategoriasPage`}>
          <button className="button">Volver a tipos</button>
        </Link>
      </div>
      );
    
}

export default AboutPage