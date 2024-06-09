// Header.js
import React from "react";
import { Link } from "react-router-dom";
import BusinesData from "./businessData";
import UserData from "../services/UserData";
const Header = () => {
  const isAdmin = UserData.admin;

  return (
    <>
      <BusinesData />
      {isAdmin && (
        <nav>
          <Link to="/admin/services" className="link">
           לרשימת השירותים
          </Link>
          <br />
          <Link to="/admin/appointments" className="link">
            לוח פגישות
          </Link>
        </nav>
      )}
    </>
  );
};

export default Header;
