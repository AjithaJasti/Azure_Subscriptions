import "./styles.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import { useHistory } from "react-router-dom";

function LandingBody() {
  let history = useHistory();
  return (
    <div>
      <Header />

      <div className="LandingBody">
        <Link to="/create" className="Links">
          <button className="createbutton">
            <h1> Create </h1>
          </button>
        </Link>
        <Link to="/" className="Links">
          <button className="viewbutton">
            <h1> View</h1>
          </button>
        </Link>
        <Link to="/" className="Links">
          <button className="deletebutton">
            <h1> Delete</h1>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandingBody;
