import "./details.css";
import Header from "../header";

function Details() {
  return (
    <>
      <Header />
      <div className="general">
        <div className="fondo-details">
          <div className="container-details">
            <div className="img-details">
              <img
                src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/53aonG0QS3ynbYuuwhPtyoOwTDD.jpg"
                alt=""
              />
            </div>
            <div>
              <h1> Name (2021)</h1>
              <span>+13</span> <span>fecha</span> <span>genero</span>{" "}
              <span> Duracion</span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Details;
