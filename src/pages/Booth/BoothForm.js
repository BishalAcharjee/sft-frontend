import React from "react";
import { useForm } from "react-hook-form";

const BoothForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const newMedicine = {
      fname: data.fname,
      lname: data.lname,
      email: data.email,
      number: data.number,
      address: data.address,
      booth: "Booth-1",
      description: data.description,
    };
    fetch("http://localhost:6060/medicine", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newMedicine),
    })
      .then((res) => res.json())
      .then((data) => {
        reset();
      });
  };

  return (
    <div>
      <section class=" d-flex justify-content-center align-items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
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
                {...register("fname")}
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Last name"
                aria-label="Last name"
                {...register("lname")}
              />
            </div>
          </div>

          <div class="row g-3">
            <div class="col-12">
              <label
                for="inputEmail4"
                class="form-label text-warning fs-6 mt-2
             fw-bold "
              >
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                {...register("email")}
              />
            </div>
            <div class="col-12">
              <label
                for="inputPassword4"
                class="form-label text-warning fs-6 mt-2 
            fw-bold "
              >
                Mobile
              </label>
              <input
                type="number"
                class="form-control"
                id="number"
                {...register("number")}
              />
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
                {...register("address")}
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
              <input
                type="text"
                class="form-control"
                {...register("booth")}
                defaultValue="Booth-1"
                disabled
              />
            </div>
            <div class="col-12">
              <label
                for="inputZip"
                class="form-label text-warning fs-6 mt-2 fw-
            bold"
              >
                Medicine Description
              </label>
              <textarea
                type="text"
                class="form-control"
                id="inputZip"
                {...register("description")}
              />
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
          </div>
        </form>
      </section>
    </div>
  );
};

export default BoothForm;
