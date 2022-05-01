import Episode from "./pages/episode/Episode";
import Home from "./pages/show/Home";

export const routes = [
  {
    path: "",
    element: Home,
  },
  {
    path: "/episode/:season/:number",
    element: Episode,
  },
];
