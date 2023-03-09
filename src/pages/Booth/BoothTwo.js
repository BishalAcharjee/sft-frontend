import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logobo from "../../Img/p2.jpg";
import { getUserFromLS } from "../../util/fetcher";

const BoothTwo = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    const x = getUserFromLS();
    setUser(x);
  }, []);
  return (
    <div className="ms-5">
      <section>
        <div class="card w100">
          <div class="card-body">
            <img src={logobo} class="w-100 img-fluid" alt="" />
            <div class="card-body">
              <p class="card-text">
                <p>Booth No : 02</p>
                <p className="fw-bold">Name : Medinova Pharmacy, Madushahid</p>
                <p>Location : Modhushahid, Sylhet </p>
              </p>
              <div class="d-grid gap-2">
                {user?.name ? (
                  <Link
                    to="/boothformtwo"
                    class="btn btn-warning fs-5 fw-bold"
                    type="button"
                  >
                    Submit
                  </Link>
                ) : (
                  <button
                    class="btn btn-warning fs-5 fw-bold disabled"
                    type="button"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BoothTwo;
