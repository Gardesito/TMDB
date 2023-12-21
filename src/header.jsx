import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="barra-header">
        <div className="barra">
          <div>
            <img src="./img/logo/logo.png" width="150px" alt="" />
          </div>
          <nav className="menu" htmlFor="btn-menu">
            <Link className="links" to="/">
              Home
            </Link>
            {/* <Link className="links">Peliculas</Link> */}
            <Link className="links" to="/favoritos">
              Favoritos
            </Link>
          {/*   <Link className="links">Mas</Link> */}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
