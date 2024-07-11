import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Heroes from "./pages/heroes";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/view", element: <Heroes /> },
]);
