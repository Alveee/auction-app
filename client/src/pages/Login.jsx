import React, { useState } from "react";
import PropTypes from "prop-types";
import "./../scss/login.scss";
import AuthService from "../services/auth";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    AuthService.login({ email, password }).then((response) => {
      setUser(response.data.data.user);
    });
  };
  return (
    <div className="container">
      <main className="form-signin text-center">
        <form onSubmit={handleSubmit}>
          <h1 className="h3 fw-normal">Auction App</h1>
          <span className="text-muted mb-3">
            <small>Please sign in</small>
          </span>

          <div className="form-floating">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label>Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label>Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
};

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default Login;
