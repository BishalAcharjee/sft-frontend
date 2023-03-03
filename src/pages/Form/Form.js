import React from "react";

const Form = () => {
  return (
    <div>
      <section class=" d-flex justify-content-center align-items-center">
        <form
          action=""
          class="border border-3 shadow p-3 mb-5 bg-body rounded 
      mt-4"
          style={{
            width: "60%",
          }}
        >
          <h1 class="text-center mb-3 text-warning shadow-sm p-3  ">
            Complete the Information
          </h1>
          <div class="row g-3">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
          </div>

          <form class="row g-3">
            <div class="col-12">
              <label
                for="inputEmail4"
                class="form-label text-warning fs-6 mt-2
             fw-bold "
              >
                Email
              </label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-12">
              <label
                for="inputPassword4"
                class="form-label text-warning fs-6 mt-2 
            fw-bold "
              >
                Mobile
              </label>
              <input type="number" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-12">
              <label
                for="inputAddress"
                class="form-label text-warning fs-6 mt-2 
            fw-bold "
              >
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Enter address"
              />
            </div>

            <div class="col-12">
              <label
                for="inputState"
                class="form-label text-warning fs-6 mt-2 fw-
            bold "
              >
                Booth No
              </label>
              <select
                id="inputState"
                class="form-select text-dark fs-6 mt-2 fw-
            bold "
              >
                <option selected>Choose...</option>
                <option class="text-warning fs-6 mt-2 fw-bold">Booth-1</option>
                <option class="text-warning fs-6 mt-2 fw-bold">Booth-2</option>
                <option class="text-warning fs-6 mt-2 fw-bold">Booth-3</option>
                <option class="text-warning fs-6 mt-2 fw-bold">Booth-4</option>
                <option class="text-warning fs-6 mt-2 fw-bold">Booth-5</option>
              </select>
            </div>
            <div class="col-12">
              <label
                for="inputZip"
                class="form-label text-warning fs-6 mt-2 fw-
            bold"
              >
                Medicine Description
              </label>
              <textarea type="text" class="form-control" id="inputZip" />
            </div>
            <div class="d-grid gap-2 col-6 mx-auto">
              <button
                type="submit"
                class="btn btn-dark mt-3 btn btn-outline-
            warning fw-bold shadow-sm"
              >
                Send
              </button>
            </div>
          </form>
        </form>
      </section>
    </div>
  );
};

export default Form;
