import React from "react";

const MedicineListRow = ({ medicineData, refetch }) => {
  const { fname, description, address } = medicineData;

  return (
    <tr>
      <th scope="row">1</th>
      <td>{fname}</td>
      <td>{description}</td>
      <td>{address}</td>
      <td>
        <button
          class="text-dark fw-bold btn btn-outline-
warning"
        >
          update
        </button>
      </td>
      <td>
        <button
          class="text-dark fw-bold btn btn-outline-
warning"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default MedicineListRow;
