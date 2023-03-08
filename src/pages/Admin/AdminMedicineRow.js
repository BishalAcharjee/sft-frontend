import React from "react";

const AdminMedicineRow = ({ medicineData }) => {
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
          alert(`Successfully Accepted`);
          window.location.reload(false);
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
          alert(`Successfully Deleted`);
          window.location.reload(false);
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
          <span class="text-dark fw-bold btn btn-outline-warning">
            Accepted
          </span>
        ) : (
          <button
            class="text-dark fw-bold btn btn-outline-warning"
            onClick={() => handleAccepted(_id)}
          >
            Accept
          </button>
        )}
      </td>
      <td>
        <button
          class="text-dark fw-bold btn btn-outline-warning"
          onClick={handleDelete}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default AdminMedicineRow;
