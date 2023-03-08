import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserFromLS, setUserToLS } from "../../util/fetcher";
import AdminBoothList from "./AdminBoothList";

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
      <AdminBoothList />
    </div>
  );
};

export default Admin;
