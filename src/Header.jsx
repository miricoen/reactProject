// Header.js
import React from "react";
import { Link } from "react-router-dom";
import BusinesData from "./businessData";
const Header = () => {
  return (
    <header>
      <BusinesData />
      <nav>
        <Link to="/admin/services" className="link">Services List</Link>
        <br />
        <Link to="/admin/appointments" className="link">Appointments List</Link>
      </nav>
    </header>
  );
};

export default Header;
