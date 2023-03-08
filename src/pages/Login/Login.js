import React, { useState } from "react";
import { postData, setUserToLS } from "../../util/fetcher";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState("");
  const db_uri = "http://localhost:5000";
  const navigate = useNavigate();
  const handleLogin = () => {
    postData(`${db_uri}/users/login`, form).then((data) => {
      console.log(data);

      if (data.status != 200) {
        setError(data.msg);
      } else {
        setUserToLS(data);
        if (data.role == "admin") {
          navigate("/admin");
        } else if (data.role == "Booth-1") {
          navigate("/boothoneinfo");
        } else if (data.role == "Booth-2") {
          navigate("/boothtwoinfo");
        } else {
          navigate("/");
        }
      }
    });
  };
  return (
    <div className="w-100 d-flex justify-content-center">
      <div
        style={{
          width: "30%",
        }}
      >
        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
          <span id="name">Login</span>
        </p>
        <form>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              Email address
            </label>
            <input
              type="email"
              id="form2Example1"
              className="form-control"
              onChange={(e) => {
                const nForm = { ...form };
                nForm["email"] = e.target.value;
                setForm(nForm);
              }}
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
            <input
              type="password"
              id="form2Example2"
              className="form-control"
              onChange={(e) => {
                const nForm = { ...form };
                nForm["password"] = e.target.value;
                setForm(nForm);
                console.log(form);
              }}
            />
            {error && (
              <div className="col d-flex justify-content-start">{error}</div>
            )}
          </div>

          <button
            type="button"
            className="btn btn-warning btn-block mb-4"
            onClick={() => {
              handleLogin();
            }}
          >
            Login
          </button>

          <div className="text-center">
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
            <p>or sign up with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-google"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-github"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
