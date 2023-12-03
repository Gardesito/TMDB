import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./views/details";
import Favoritos from "./views/favoritos.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1> ERROOOOOOOOR</h1>,
  },

  {
    //el path es como el URL
    path: "/:movieId",
    element: <Details />,
  },

  {
    path: "/favoritos",
    element: <Favoritos />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
