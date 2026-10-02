import React from "react";

import {
  useNavigate
} from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>
          E-Ticketing
        </h1>

        <p>
          Login to continue
        </p>

        <input
          type="text"
          placeholder="Username"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button
          onClick={() => navigate("/dashboard")}
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;