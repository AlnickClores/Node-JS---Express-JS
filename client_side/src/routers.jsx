import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Heroes from "./pages/heroes";
import CreateHero from "./pages/createHero";
import UpdateHero from "./pages/updateHero";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/create", element: <CreateHero /> },
  { path: "/update/:id", element: <UpdateHero /> },
]);
