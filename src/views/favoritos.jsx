import Header from "../header";
import "./favoritos.css";
//import { useState } from "react";

function Favoritos() {
  const listaFavoritos = JSON.parse(localStorage.getItem("movies"));

  console.log(localStorage.getItem("movies"))
  return (
    <div>
      <Header />

      <h1>Favoritos</h1>
      {listaFavoritos.map((movie) => {
        return <div>{movie.name}</div>;
      })}
    </div>
  );
}

export default Favoritos;
