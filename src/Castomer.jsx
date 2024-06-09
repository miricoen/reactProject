// CustomerPage.js
import React from "react";
import { Route } from "react-router-dom";
import Layout from "./Layout"; 
// import ServicesComponent from "./ServiceComponnent.jsx";
import ServiceComponent from "./ServiceComponnent";
import UserStore from "./UserData";

const CustomerPage = () => {
  return (
    <Layout>
      <h1>ניסיון</h1>
      <ServiceComponent />
      <h1>ניסיון</h1>

    </Layout>
  )
}


export default CustomerPage;
