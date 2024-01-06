// Layout.js
import React from 'react';
import Header from './Header'; // Import the Header component

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
