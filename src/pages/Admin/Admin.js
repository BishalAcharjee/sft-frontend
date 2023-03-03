import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserFromLS, setUserToLS } from "../../util/fetcher";
import BoothList from "./BoothList";
import MedicineList from "./MedicineListOne";

const Admin = () => {
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    const x = getUserFromLS();
    setUser(x);
  }, []);
  return (
    <div>
      <h1 className="text-center p-3" id="name">
        Hello Admin
      </h1>
      <BoothList />
      <div className="d-flex justify-content-center p-3">
        <button
          className=" btn btn-warning 
                  text-light"
          onClick={() => {
            setUser({});
            setUserToLS("");
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Admin;
