// CustomerPage.js
import React from "react";
import { Route } from "react-router-dom";
import Layout from "./Layout"; 
import ServicesComponent from "./ServiceComponnent";
import UserStore from "./UserData";

const CustomerPage = () => {
  return (
    <Layout>
      <ServicesComponent />
    </Layout>
  )
}

export default CustomerPage;
