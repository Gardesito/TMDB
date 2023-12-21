import Header from "../header";
import "./favoritos.css";
//import { useState } from "react";

function Favoritos() {
  const listaFavoritos = JSON.parse(localStorage.getItem("movies"));

  console.log(localStorage.getItem("movies"));
  return (
    <div>
      <Header />

      {listaFavoritos?.map((movie) => {
        return (
          <div key={movie.id} className="containerFav">
            <div>
              {" "}
              <img
                className="imgFav"
                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.image}`}
                alt=""
              />
            </div>

            {/* <div className="titleFav">{movie.title}</div> */}
            <div class="notification">
              <div className="notiglow"></div>
              <div className="notiborderglow"></div>
              <div className="notititle">{movie.title}</div>
              <div className="notibody">{movie.favorite}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Favoritos;
