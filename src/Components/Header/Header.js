import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { getUserFromLS, setUserToLS } from "../../util/fetcher";

const Header = () => {
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    const x = getUserFromLS();
    setUser(x);
    console.log(x);
    console.log(user);
  }, []);

  console.log(user);

  return (
    <div className="bg-light">
      <div className="top">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">Support For Tomorrow</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link active text-dark"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/#about" className="nav-link text-dark">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className="nav-link text-dark">
                    Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/#contact" className="nav-link text-dark">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/booth" className="nav-link text-dark">
                    Booth
                  </Link>
                </li>
                {console.log(user)}
                {user ? (
                  <>
                    <li className="nav-item" style={{ color: "red" }}>
                      {user.name}
                    </li>
                    <li className="nav-item">
                      <button
                        className=" btn btn-warning 
                  text-light"
                        onClick={() => {
                          setUser({});
                          setUserToLS("");
                          navigate("/");
                        }}
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item ">
                      <Link to="/register" className="nav-link">
                        <button
                          className=" btn btn-warning 
                  text-light"
                        >
                          Register
                        </button>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/Login" className="nav-link">
                        <button
                          className=" btn btn-warning 
                  text-light"
                        >
                          Login
                        </button>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
