import React, { useState } from "react";
import { postData, setUserToLS } from "../../util/fetcher";
import { useNavigate } from "react-router-dom";
import logor from "../../Img/logo 2.png";

const Register = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState("");
  const db_uri = "http://localhost:5000";
  const navigate = useNavigate();
  const handleRegister = () => {
    postData(`${db_uri}/users/signup`, form).then((data) => {
      console.log(data.role);
      if (data.status != 200) {
        setError(data.msg);
      } else {
        navigate("/login");
      }
    });
  };

  return (
    <div>
      <section
        className="vh-200"
        style={{
          backgroundColor: "#eee",
        }}
      >
        <div className="container h-100">
          <div
            className="row d-flex justify-content-center align-items-center h-
          100"
          >
            <div className="col-lg-12 col-xl-11">
              <div
                className="card text-black"
                style={{ borderRadius: "25pxs" }}
              >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div
                      className="col-md-10 col-lg-6 col-xl-5 order-2 order-
                    lg-1"
                    >
                      <p
                        className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 
                      mt-4"
                      >
                        <span id="name">Register</span>
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Name
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              onChange={(e) => {
                                const nForm = { ...form };
                                nForm["name"] = e.target.value;
                                setForm(nForm);
                              }}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              onChange={(e) => {
                                const nForm = { ...form };
                                nForm["email"] = e.target.value;
                                setForm(nForm);
                              }}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              // htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              onChange={(e) => {
                                const nForm = { ...form };
                                nForm["password"] = e.target.value;
                                setForm(nForm);
                              }}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              // htmlFor="form3Example4cd"
                            >
                              Repeat your password
                            </label>
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              onChange={(e) => {
                                const nForm = { ...form };
                                nForm["confirm_password"] = e.target.value;
                                setForm(nForm);
                              }}
                            />
                          </div>

                          {error && (
                            <div className="col d-flex justify-content-start">
                              {error}
                            </div>
                          )}
                        </div>

                        <div
                          className="form-check d-flex justify-content-center 
                          mb-5"
                        >
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                            // htmlFor="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div
                          className="d-flex justify-content-center mx-4 mb-3 mb-
                        lg-4"
                        >
                          <button
                            type="button"
                            className="btn btn-warning "
                            onClick={handleRegister}
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div
                      className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-
                      center order-1 order-lg-2"
                    >
                      <img
                        src={logor}
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
