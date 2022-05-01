import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";

function App() {
  /**
   * The App is created as arouter container to
   * navigate and between components from the url
   */
  return (
    <Router>
      <Routes>
        {routes.map((route, i) => (
          <Route key={i} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
