import React from "react";
import { FiMail } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xrgvlzbr");
  if (state.succeeded) {
    alert("We will get back to you. Thank you!");
    window.location.reload(false);
  }

  return (
    <section id="contact">
      <div className="container pt-5 pb-5">
        <h1 className="text-center">
          <span id="name">Stay In Touch</span>
        </h1>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 pb-5" />

          <form onSubmit={handleSubmit}>
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
                <div className="form-group"></div>
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
                      name="message"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-warning
                    text-light btn-block rounded-3 py-2"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
