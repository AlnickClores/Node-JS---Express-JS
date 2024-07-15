import "./App.css";
import Heroes from "./pages/heroes";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="homepage">
      <div className="inner-container">
        <h1 className="title">Heroes</h1>
        <Heroes />
        <div className="buttons">
          <button className="create-btn">
            <Link to="/">Create</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
