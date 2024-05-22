import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import github from "../assets/images/logotipo-de-github.png"
import about from  "../assets/images/about-logo.png"
import { Spinner } from "react-bootstrap/esm";
function CategoriasPage() {
  const [categorias, setCategorias] = useState(null);

  const params = useParams();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/type`)
      .then((response) => {
        console.log(response);
        setCategorias(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (categorias === null) {
    return <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>;
  }
 


  return (
<div className="categorias-container">
  <div className="categorias-grid">
    {categorias.map((eachCategoria, i) => {
      console.log(eachCategoria.name);
      return (
        <div key={i} className="categoria-item">
        <Link to={`/pokemon-por-tipo/${eachCategoria.name}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div key={eachCategoria.name}>
            <img src={`images/${eachCategoria.name}-logo.png`} alt="pokeball" width={60} />
            <p><strong>{eachCategoria.name.charAt(0).toUpperCase() + eachCategoria.name.slice(1)}</strong></p>
          </div>
        </Link>
      </div>
      
      );
    })}
  </div>
  <Link to="/">
    <button className="button">Home</button>
  </Link>
  <div className="footer">
        <Link to="https://github.com/RoigOriol/PokeWapi-client" target="_blank">
          <img src={github} alt="Left" className="footer-image-left" />
        </Link>
        <Link to="/AboutPage">
          <img src={about} alt="Right" className="footer-image-right" />
        </Link>
      </div>
</div>

  );
}

export default CategoriasPage;
