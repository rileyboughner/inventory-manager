import React, { useEffect, useState } from "react";
import Inventory from "./components/Inventory"
import ItemCard from "./components/ItemCard"
import Sidebar from "./components/Sidebar"

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
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/inventory/0")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setInventory(data); // assuming API returns a list of items
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch inventory:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <Sidebar />
      {inventory.map((item) => (
        <ItemCard
          key={item.id}
          imageUrl={item.image_url}
          brand={item.brand}
          model={item.model}
          color={item.color}
          style={item.style}
          price={69}
        />
      ))}
    </div>
  );
};
export default App;
