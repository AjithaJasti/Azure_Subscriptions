import { useRef, useState, useEffect, useContext } from "react";
// import AuthContext from "./context/AuthProvider";
import { useHistory } from "react-router-dom";
import "./Login.css";
import Header from "./Header";
// import axios from './api/axios';
// const LOGIN_URL = '/auth';

const Login = () => {
  // const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  let history = useHistory();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);

    setUser("");
    setPwd("");
    setSuccess(true);
  };
  return (
    <>
      {/* {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                </section>
            ) : ( */}
      <Header />
      <section>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1>Login to the Azure Tenant</h1>
        <form onSubmit={handleSubmit} className="loginform">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <button
            onClick={() => {
              history.push("/subscriptions");
            }}
          >
            Login
          </button>
        </form>
      </section>
      {/* )} */}
    </>
  );
};

export default Login;
