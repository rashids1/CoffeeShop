import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import InConstruction from "./pages/InConstruction";
import AboutUs from "./pages/AboutUs";

import TypeOfCoffee from "./pages/TypesOfCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/under-construction",
    element: <InConstruction />,
  },
  {
    path: "/About-us",
    element: <AboutUs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/types-of-coffee",
    element: <TypeOfCoffee />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
