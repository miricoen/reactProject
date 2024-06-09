// Header.js
import React from "react";
import { Link } from "react-router-dom";
import BusinesData from "./businessData";
import UserData from "./UserData";
const Header = () => {
  const isAdmin = UserData.admin;

  return (
    <>
      <BusinesData />
      {isAdmin && (
        <nav>
          <Link to="/admin/services" className="link">
            Services List
          </Link>
          <br />
          <Link to="/admin/appointments" className="link">
            Appointments List
          </Link>
        </nav>
      )}
    </>
  );
};

export default Header;
