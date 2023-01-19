import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import InConstruction from "./pages/InConstruction";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
