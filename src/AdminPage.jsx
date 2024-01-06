import React from "react";
import { Route, Link, Routes, Outlet } from "react-router-dom";
import Header from "./Header";

import Layout from "./Layout";
const AdminPage = () => {
  return (
    <Layout>
      <Outlet></Outlet>
    </Layout>
  );
};

export default AdminPage;
