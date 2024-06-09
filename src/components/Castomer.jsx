// CustomerPage.js
import React from "react";
import Layout from "./LayOut";
// import ServicesComponent from "./ServiceComponnent.jsx";
import ServiceComponent from "./ServiceComponnent";
import UserStore from "../services/UserData";

const CustomerPage = () => {
  return (
    <Layout>
      <ServiceComponent />
    </Layout>
  );
};

export default CustomerPage;
