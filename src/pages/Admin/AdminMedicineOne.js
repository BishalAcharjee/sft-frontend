import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import AdminMedicineRow from "./AdminMedicineRow";

const AdminMedicineOne = () => {
  const [medicines, setMedicines] = useState([]);
  let arrayList = [];

  //   const { data: medicines, refetch } = useQuery("medicines", () =>
  //     fetch("http://localhost:6060/medicineone").then((res) => res.json())
  //   );

  useEffect(() => {
    fetch(`http://localhost:6060/medicineone`).then((res) =>
      res.json().then((data) => {
        arrayList = data.filter((data) => data.status === "accepted");
        setMedicines(arrayList);
        // console.log("after filter", arrayList);
        // console.log("after filter length", arrayList.length);
      })
    );
  }, []);

  return (
    <div>
      <section>
        <table class="table caption-top border border-3 shadow table-warning">
          <caption class="text-center fw-bold fs-3 mt-5">Medicine List</caption>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Medicine</th>
              <th scope="col">Address</th>
              <th scope="col">Accept</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {medicines?.map((medicineData) => (
              <AdminMedicineRow
                key={medicineData._id}
                medicineData={medicineData}
              ></AdminMedicineRow>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminMedicineOne;
