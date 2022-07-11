import Header from "./Header";
import { useHistory } from "react-router-dom";
import Subscriptions from "./Subscriptions";

function Logintest() {
  let history = useHistory();

  return (
    <>
      {/* <Header /> */}
      <div>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <button
          onClick={() => {
            history.push("/subscriptions");
          }}
        >
          Login
        </button>
      </div>
    </>
  );
}

export default Logintest;
