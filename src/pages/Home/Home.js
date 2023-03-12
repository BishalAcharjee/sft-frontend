import React, { useEffect, useState } from "react";
import logo from "../../Img/logo 1.png";
import logoa from "../../Img/logo 5.png";
import logoqr from "../../Img/sft.png";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import Contact from "./Contact";
import Blog from "../Blog/Blog";
import "./Home.css";

const Home = () => {
  return (
    <div className="bg-light">
      <section className="bg-light bg-image ">
        <div className="container">
          <div className="row mt-5 ">
            <div className="col-lg-6 col-sm-12">
              <img className="img-fluid" src={logo} />
            </div>
            <div
              className="col-lg-6 col-sm-12 mt-4 d-flex align-content-center 
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
                <Link
                  to="/register"
                  type="button"
                  className="btn btn-warning text-light w-25 mb-5"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mb-5">
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-6 col-sm-12">
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
            <div className="col-lg-6 col-sm-12">
              <img className="img-fluid" src={logoa} alt="" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-6 col-sm-12">
              <img
                className="img-fluid h-30 w-50 mx-auto d-block"
                src={logoqr}
                alt=""
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <h1 className="p-3">
                <span id="qr">Our QR Scanner</span>
              </h1>
              <h3 className="p-3">Coming Soon.....</h3>
              <p className="ps-3">
                In our future a user don't have to fill-up the form on our
                website. We will try to give our every booth a QR code for their
                own portal. Than the user could be able to register medicine to
                direct booth and it will reduce the user effort.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Blog></Blog>
      <Contact></Contact>
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
