import { useState, useEffect } from "react";
import "./App.css";
import Card from "./componentes/card";
import Input from "./componentes/input/input";
import Header from "./header";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjUxZmE5ZTg2Yjk3N2U2NGJhNzUzZmI2YjM5MzMwMiIsInN1YiI6IjY1NWY1MWI2N2RmZGE2MDBhYzIxNTUxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BlZfenNoehLjhIX0-Ovs0RORJ3O5_BR5G5F5GB4u1p8",
  },
};
function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <Header  />
      <div className="container">
        <Input setMovies={setMovies} />
        <div className="card-list">
          {movies.map((movie) => (
            <Card movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
