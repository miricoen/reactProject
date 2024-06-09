// Layout.js
import React from 'react';
import Header from './Header'; 
import UserData from './UserData';

const Layout = ({ children }) => {
  console.log("UserData.admin", UserData.admin);
  const isAdmin = UserData.admin; 
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;