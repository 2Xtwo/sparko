import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-navy-50">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;