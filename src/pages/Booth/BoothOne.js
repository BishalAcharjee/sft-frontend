import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logobo from "../../Img/p1.jpg";
import { getUserFromLS } from "../../util/fetcher";

const BoothOne = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    const x = getUserFromLS();
    setUser(x);
  }, []);

  return (
    <div>
      <section>
        <div class="card">
          <div class="card-body">
            <img src={logobo} class="w-100 img-fluid" alt="" />
            <div class="card-body">
              <p class="card-text ">
                <p>Booth No : 01 </p>
                <p className="fw-bold">Name : The Rahman Pharmacy </p>
                <p>Location : Jitumiyar Point, Sylhet </p>
              </p>
              <div class="d-grid gap-2">
                {user?.name ? (
                  <Link
                    to="/boothform"
                    class="btn btn-warning fs-5 fw-bold"
                    type="button"
                  >
                    Submit
                  </Link>
                ) : (
                  <>
                    <p className="text-danger">
                      Only Registered User Can Submit
                    </p>

                    <button
                      class="btn btn-warning fs-5 fw-bold disabled"
                      type="button"
                    >
                      Submit
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BoothOne;
