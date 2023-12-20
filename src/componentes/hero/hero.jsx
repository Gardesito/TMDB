import { Link } from "react-router-dom";
import "./hero.css";
import Input from "../input/input";

function Hero({ setMovies }) {
  return (
    <div className="container1">
      <div className="title-cont">
        <h1 className="title">Bienvenidos</h1>
        <h2 className="sub">
          Millones de <span>películas</span>, programas de televisión y personas
          por descubrir. Explora ahora.
        </h2>
        <div className="input1">
          <Input setMovies={setMovies} />
        </div>
      </div>
      <div id="nc-main" className="nc-main bg-cover bg-cc">
        <div className="full-wh"></div>
      </div>
    </div>
  );
}
export default Hero;
