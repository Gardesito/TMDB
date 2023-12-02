import "./details.css";
import Header from "../header";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjUxZmE5ZTg2Yjk3N2U2NGJhNzUzZmI2YjM5MzMwMiIsInN1YiI6IjY1NWY1MWI2N2RmZGE2MDBhYzIxNTUxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BlZfenNoehLjhIX0-Ovs0RORJ3O5_BR5G5F5GB4u1p8",
  },
};

function Details() {
  let { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=es-AR`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovie(response);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(movie);
  if (!movie) {
    return (
      <div className="loader">
        <li className="ball"></li>
        <li className="ball"></li>
        <li className="ball"></li>
      </div>
    );
  }

  const obteneraño = (date) => {
    const year = date.substr(0, 4);
    return year;
  };

  function convertirMinutosAHoras(minutos) {
    if (typeof minutos !== "number" || minutos < 0) {
      return "Por favor, proporciona un número válido de minutos.";
    }

    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;

    const horasStr = horas > 1 ? `${horas} h` : `${horas} h`;
    const minutosStr =
      minutosRestantes > 1
        ? `${minutosRestantes} minutos`
        : `${minutosRestantes} minuto`;

    if (horas > 0 && minutosRestantes > 0) {
      return `${horasStr}  ${minutosStr}`;
    } else if (horas > 0) {
      return horasStr;
    } else {
      return minutosStr;
    }
  }

  const agregarFavorito = () => {
    // agregar la pelicula al local storage
  };
  //console.log(localStorage.getItem("movies"));
  return (
    <>
      <Header />
      <div
        className="general"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path})`,
        }}
      >
        <div className="fondo-details">
          <div className="container-details">
            <div className="img-details">
              <img
                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
                alt=""
              />
            </div>
            <div className="info-container">
              <h1>
                {movie.title} ({obteneraño(movie.release_date)})
              </h1>
              <span>{movie.release_date}</span>
              {movie.genres.map((genre) => (
                <span className="genre">{genre.name}</span>
              ))}
              <span> {convertirMinutosAHoras(movie.runtime)}</span>
              <div>
                <button onClick={agregarFavorito()}>agregar a favoritos</button>
              </div>
              <p className="tagline">{movie.tagline}</p>
              <p className="descripcion">({movie.overview})</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Details;
