import React, { useEffect, useState } from "react";
import logo from "../../Img/logo 1.png";
import logoa from "../../Img/logo 5.png";
import { FiMail } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-light">
      <section className="bg-light">
        <div className="container">
          <div className="row mt-5 ">
            <div
              className="col-6 mt-4 d-flex align-content-center 
            flex-column p-5 "
            >
              <h1 className="mb-3">
                <span id="name">Support For Tomorrow</span>
              </h1>
              <h3 className="mt-3 text-warning">MEDICINE-MEDICATION-SMILE</h3>
              <p className="fs-5">
                That NGO can help needy people. The user can donate the
                medicine. Many poor people who do not afford to buy their own
                medicines.
              </p>
              <div className="d-flex g-5">
                <button
                  type="button"
                  className="btn btn-warning text-light w-25 mb-5"
                >
                  Get Started
                </button>
              </div>
            </div>
            <div className="col-6">
              <img className="img-fluid" src={logo} />
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="row mt-5">
            <div className="col-7">
              <h1 className="p-3">
                <span id="name">About us</span>
              </h1>
              <p className="p-3">
                In this system proposed here aims at providing an online
                platform for donating medicines or unused medicines to needy
                people. Users can register themselves on this system by
                submitting their necessary details. Once registered the users
                can donate the medicines by providing accurate medicine details
                to NGOs. The system has the authority to block the users if they
                raise a request to donate improper or expired medicines. The
                system will maintain a record of donated & available medicines.
                The users can raise a request to donate or avail the medicines.
              </p>
            </div>
            <div className="col-5">
              <img className="img-fluid" src={logoa} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container pt-5 pb-5">
          <h1 className="text-center">
            <span id="name">Stay In Touch</span>
          </h1>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 pb-5" />

            <form action="mail.php" method="post">
              <div className="card border-warning rounded-5">
                <div className="card-header p-">
                  <div className="text-center py-2">
                    <h3>
                      <FiMail /> Contact Us
                    </h3>
                    <p className="m-0">Fillup The Information</p>
                  </div>
                </div>
                <div className="card-body p-3">
                  <div className="form-group">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <FiUser />
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="yname"
                        name="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <FiMail />
                        </div>
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        id="yemail"
                        name="email"
                        placeholder="youremail@gmail.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <FiEdit />
                        </div>
                      </div>
                      <textarea
                        className="form-control"
                        placeholder="Your text here...."
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="text-center">
                    <input
                      type="submit"
                      value="Send"
                      className="btn btn-warning text-light btn-block
                       rounded-3 py-2"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-dark  p-5 text-light text-center">
        <div className="d-flex justify-content-center">
          <div>
            <div>©support-for-tomorrow</div>
            <a target="_blank" href="www.facebook.com">
              <FiFacebook className="me-2" />
            </a>
            <a target="_blank" href="www.twitter.com">
              <FiTwitter className="me-2" />
            </a>
            <a target="_blank" href="www.instagram.com">
              <FiInstagram className="me-2" />
            </a>
            <a target="_blank" href="www.linkedin.com">
              <FiLinkedin className="me-2" />
            </a>
            <a target="_blank" href="mail.google.com">
              <FiMail className="me-2" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
