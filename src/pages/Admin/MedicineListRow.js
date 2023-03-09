import React from "react";

const MedicineListRow = ({ medicineData, refetch }) => {
  const { fname, description, address, _id, status } = medicineData;
  const handleAccepted = () => {
    fetch(`http://localhost:6060/medicine/${_id}`, {
      method: "PUT",
    })
      .then((res) => {
        if (res.status === 403) {
          alert("Only Booth and Admin can accept");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          alert(`Successfully Accepted`);
        }
      });
  };

  const handleDelete = () => {
    fetch(`http://localhost:6060/medicine/${_id}`, {
      method: "Delete",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          alert(`Successfully Deleted`);
        }
      });
  };

  return (
    <tr>
      <th scope="row">1</th>
      <td>{fname}</td>
      <td>{description}</td>
      <td>{address}</td>
      <td>
        {status == "accepted" ? (
          <span
            class="text-warning fw-bold btn btn-outline-
warning"
          >
            Accepted
          </span>
        ) : (
          <button
            class="text-warning fw-bold btn btn-outline-
warning"
            onClick={() => handleAccepted(_id)}
          >
            Accept
          </button>
        )}
      </td>
      <td>
        <button
          class="text-danger fw-bold btn btn-outline-
danger"
          onClick={handleDelete}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MedicineListRow;
