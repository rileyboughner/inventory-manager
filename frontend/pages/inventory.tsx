import React from 'react';
import Inventory from '../components/Inventory'; // adjust path as needed
import Sidebar from '../components/Sidebar';

const InventoryPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '240px', flexShrink: 0, zIndex: 2 }}>
        <Sidebar />
      </div>

      <div style={{ flexGrow: 1, padding: '24px', overflowY: 'auto', zIndex: 1 }}>
        <Inventory />
      </div>
    </div>
  );
};

export default InventoryPage;

