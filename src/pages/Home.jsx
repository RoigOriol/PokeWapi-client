import React from 'react'

function Home() {
  return (
    <div className="contenedor-imagen">
    <img src="./src/assets/images/portada.png" alt="starwars" />


    <div className="portada">
      <a href="/CategoriasPage">
        <button className="btn-entrada">Start Wars</button>
      </a>
    </div>
   
  </div>
  )
}

export default Home