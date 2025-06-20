import React, { useState } from 'react';
import BuyPopup from "../components/BuyPopup";

const Dashboard = () => {
  const [showBuyPopup, setShowBuyPopup] = useState(false);
  const [showTradePopup, setShowTradePopup] = useState(false);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="flex gap-4">
        <button
          onClick={() => setShowBuyPopup(true)}
          className="px-6 py-2 bg-green-600 text-white rounded"
        >
          Buy
        </button>
        <button
          onClick={() => setShowTradePopup(true)}
          className="px-6 py-2 bg-blue-600 text-white rounded"
        >
          Trade
        </button>
      </div>

      {showBuyPopup && (
        <BuyPopup
          onClose={() => setShowBuyPopup(false)}
          onConfirm={(data) => {
            console.log("Buying:", data);
            setShowBuyPopup(false);
            // You could POST this to your API
          }}
        />
      )}

      {showTradePopup && (
        <Popup onClose={() => setShowTradePopup(false)} title="Trade Guitars">
          <p>Insert trade flow here.</p>
        </Popup>
      )}
    </div>
  );
};

const Popup = ({
  onClose,
  title,
  children,
}: {
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black text-lg">×</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Dashboard;
