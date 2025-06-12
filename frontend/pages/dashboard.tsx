import React from 'react';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';

const InventoryPage: React.FC = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default InventoryPage;
