import React from "react";
import { useQuery } from "react-query";
import MedicineListRow from "./MedicineListRow";

const MedicineListTwo = () => {
  const { data: medicines, refetch } = useQuery("medicines", () =>
    fetch("http://localhost:6060/medicinetwo").then((res) => res.json())
  );

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
              <th scope="col">Booth_No</th>
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

export default MedicineListTwo;
