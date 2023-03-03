import React from "react";
import { Link } from "react-router-dom";
import logobo from "../../Img/logo_4.png";

const BoothList = () => {
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img src={logobo} class="card-img-top w-50 img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Booth-1</h5>
              <Link to="/boothoneinfo" type="button" class="btn btn-success">
                Check
              </Link>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={logobo} class="card-img-top w-50 img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Booth-2</h5>
              <Link to="/boothtwoinfo" type="button" class="btn btn-success">
                Check
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoothList;
