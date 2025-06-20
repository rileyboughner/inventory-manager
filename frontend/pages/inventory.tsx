import React, { useState } from 'react';
import Inventory from '../components/Inventory';
import Sidebar from '../components/Sidebar';
import BuyPopup from '../components/BuyPopup';

const InventoryPage: React.FC = () => {
  const [showBuyPopup, setShowBuyPopup] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  return (
    <div style={{ display: 'flex', height: '100vh', position: 'relative' }}>
      {/* Sidebar */}
      <div style={{ width: '240px', flexShrink: 0, zIndex: 10 }}>
        <Sidebar />
      </div>

      {/* Main content */}
      <div style={{ flexGrow: 1, padding: '24px', overflowY: 'auto' }}>
        <Inventory refreshTrigger={refreshTrigger} />
      </div>

      {/* Floating Add Inventory Button */}
      <button
        onClick={() => setShowBuyPopup(true)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          backgroundColor: '#4caf50',
          color: 'white',
          padding: '12px 24px',
          fontSize: '16px',
          border: 'none',
          borderRadius: '999px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
          zIndex: 1000,
        }}
        title="Add Inventory"
      >
        Add Inventory
      </button>

      {/* Modal popup */}
      {showBuyPopup && (
        <BuyPopup
          onClose={() => setShowBuyPopup(false)}
          onConfirm={() => {
            setRefreshTrigger(prev => prev + 1); // ✅ refresh inventory
            setShowBuyPopup(false);
          }}
        />
      )}
    </div>
  );
};

export default InventoryPage;
