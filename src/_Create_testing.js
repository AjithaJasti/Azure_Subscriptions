import Header from "./Header";
import "./Create.css";
import { Link } from "react-router-dom";
import DropdownApp from "./DropdownApp";
import { useState } from "react";

const tenants = ["Tenant 1", "Tenant 2", "Tenant 3"];

function Create() {
  const [values, setValues] = useState({
    tenants: ""
  });
  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };
  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default submission
    try {
      await saveFormData();
      alert("Your registration was successfully submitted!");
      setValues({
        tenants: ""
      });
    } catch (e) {
      alert(`Registration failed! ${e.message}`);
    }
  };

  return (
    <>
      <Header />
      <div className="Box">
        <h1 className="title"> Select a tenant to create a subscription</h1>

        {/* <DropdownApp /> */}
        <form onSubmit={onSubmit}>
          <select required value={values.tenants} onChange={set("tenants")}>
            <option value="">Select Tenants </option>
            {tenants.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          <Link to="/login" className="nextlink">
            <button type="submit">
              <h1> Create </h1>
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default Create;
