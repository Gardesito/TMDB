import { Link } from "react-router-dom";
import "./hero.css";

function Hero() {
  return (
    <div className="container">
      <div className="title-cont">
      <h1 className="title">Bienvenidos</h1>
      <h2 className="sub">
        Millones de <span>películas</span>, programas de televisión y personas
        por descubrir. Explora ahora.
      </h2>
      </div>
      <div id="nc-main" className="nc-main bg-cover bg-cc">

  <div className="full-wh">

  
    <div className="bg-animation">
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div id='stars4'></div>
    </div>

  </div>
</div>
    </div>
  );
}
export default Hero;
