import Header from "../header";
import "./favoritos.css";
//import { useState } from "react";

function Favoritos() {
  const listaFavoritos = JSON.parse(localStorage.getItem("movies"));

  listaFavoritos.map((movie)=> console.log(movie.name))
  //console.log(listaFavoritos);
  return (
    <div>
      <Header />

      <h1>Favoritos</h1>
      {/* {listaFavoritos.map((movie) => {
        return <div>{movie.name}</div>;
      })} */}
    </div>
  );
}

export default Favoritos;
