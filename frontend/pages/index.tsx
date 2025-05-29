import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard"
import Sidebar from "../components/Sidebar"
import Inventory from "../components/Inventory"

type InventoryItem = {
  id: number;
  brand: string;
  model: string;
  color: string;
  style: string;
  price: number;
  image_url: string;
};

const App: React.FC = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <Sidebar />
    </div>
  );
};

export default App;
