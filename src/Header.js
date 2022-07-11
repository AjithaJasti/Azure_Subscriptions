import "./styles.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <Link to="/" className="image_link">
        <img
          src="./images/rubriklogo.jpg"
          className="rubrik_logo"
          alt="Rubrik"
        />
      </Link>
      <h1> Azure Subscriptions </h1>
    </div>
  );
}
export default Header;
