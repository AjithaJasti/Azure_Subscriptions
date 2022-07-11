import Header from "./Header";
import { Redirect } from "react-router-dom";
import "./Subscriptions.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const dept = ["IT", "Eng", "Sales"];
const env = ["Prod", "Dev"];

function Registration() {
  // let history = useHistory();

  const [values, setValues] = useState({
    name: "",
    dept: "",
    env: "",
    cost: "",
    costcenter: "",
    account: ""
  });
  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const saveFormData = async () => {
    const response = await fetch("/successful", {
      method: "POST",
      body: JSON.stringify(values)
    });
    if (response.status !== 200) {
      throw new Error(`Request failed: ${response.status}`);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default submission
    try {
      await saveFormData();
      alert("Your registration was successfully submitted!");
      setValues({
        name: "",
        dept: "",
        env: "",
        cost: "",
        costcenter: "",
        account: ""
      });
    } catch (e) {
      alert(`Registration failed! ${e.message}`);
    }
  };

  return (
    <>
      <div className="title">
        <h1>Enter details to create a subscription </h1>{" "}
      </div>
      <div>
        <form onSubmit={onSubmit} className="forms">
          <label>Subscription Name</label>
          <input required value={values.name} onChange={set("name")} />

          <label> Department </label>
          <select required value={values.dept} onChange={set("dept")}>
            <option value="">Select Department</option>
            {dept.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          <label> Environment </label>
          <select required value={values.env} onChange={set("env")}>
            <option value="">Select Environment </option>
            {env.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          <label>Monthly Estimated Cost*:</label>
          <input
            type="number"
            required
            min="1"
            value={values.cost}
            onChange={set("cost")}
          />

          <label>Cost center:</label>
          <input value={values.costcenter} onChange={set("costcenter")} />

          <label>GL Account:</label>
          <input value={values.account} onChange={set("account")} />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default function Subscriptions({ authorized }) {
  if (!authorized) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Header />
      <div className="Subscriptions">
        <Registration />
      </div>
    </>
  );
}
