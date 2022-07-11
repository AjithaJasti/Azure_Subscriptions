import Header from "./Header";
import "./Create.css";
import { Link } from "react-router-dom";
import DropdownApp from "./DropdownApp";
import { useHistory } from "react-router-dom";

function Create() {
  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };
  return (
    <>
      <Header />
      <div className="Box">
        <h1 className="title"> Select a tenant to create a subscription</h1>

        <DropdownApp />
        <Link to="/login" className="nextlink">
          <button type="submit">
            <h1> Create </h1>
          </button>
        </Link>
      </div>
    </>
  );
}

export default Create;
