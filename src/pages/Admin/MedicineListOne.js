import React from "react";
import { useQuery } from "react-query";
import MedicineListRow from "./MedicineListRow";

const MedicineList = () => {
  const { data: medicines, refetch } = useQuery("medicines", () =>
    fetch("http://localhost:6060/medicineone").then((res) => res.json())
  );

  console.log(medicines);
  return (
    <div>
      <section>
        <table
          class="table caption-top border border-3 shadow table-
        warning"
        >
          <caption
            class="text-center fw-bold fs-3 mt-5
        "
          >
            Medicine List
          </caption>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Medicine</th>
              <th scope="col">Address</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {medicines?.map((medicineData) => (
              <MedicineListRow
                key={medicineData._id}
                medicineData={medicineData}
                refetch={refetch}
              ></MedicineListRow>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default MedicineList;
