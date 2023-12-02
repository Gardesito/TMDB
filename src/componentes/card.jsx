import "./card.css";
import { Link } from "react-router-dom";

function Card({ movie }) {
  /* console.log(movie); */
  return (
    <div>
      <div className="card">
        <Link to={`/${movie.id}`}>
          <img
            className="img-card"
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
            alt=""
          />
        </Link>
      </div>
      <Link to={`/${movie.id}`}>
        <h1 className="titulo-card">{movie.title}</h1>
      </Link>
    </div>
  );
}
export default Card;
