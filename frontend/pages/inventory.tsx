import React from 'react';
import Inventory from '../components/Inventory'; // adjust path as needed
import Sidebar from '../components/Sidebar';

const InventoryPage: React.FC = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <Sidebar />
      <Inventory />
    </div>
  );
};

export default InventoryPage;
