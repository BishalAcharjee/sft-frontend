import React from "react";
import BoothOne from "./BoothOne";
import BoothTwo from "./BoothTwo";

const Booth = () => {
  return (
    <div>
      <h1 className="text-center">
        <span id="name">Our Booths</span>
      </h1>
      <div class="row m-4 h-50">
        <div class="d-flex col-sm-4">
          <BoothOne></BoothOne>
          <BoothTwo></BoothTwo>
        </div>
      </div>
    </div>
  );
};

export default Booth;
