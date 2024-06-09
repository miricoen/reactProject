// Layout.js
import React from "react";
import Header from "./Header";
import UserData from "../services/UserData";
import BtnBackHome from "./BtnBackHome";

const Layout = ({ children }) => {
  const isAdmin = UserData.admin;
  return (
    <div>
      <Header />
      <div>{children}</div>
      <BtnBackHome></BtnBackHome>
    </div>
  );
};

export default Layout;
