import React, { useEffect, useState } from "react";

type InventoryItem = {
  id: number;
  color: string;
  serial_number: string | null;
  brand: string;
  model: string;
  company_id: string;
};

const Inventory = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/inventory/1")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setInventory(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading inventory...</div>;
  if (error) return <div>Error loading inventory: {error}</div>;

  return (
    <div>
      <h2>Inventory</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Color</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Serial Number</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.color}</td>
              <td>{item.brand}</td>
              <td>{item.model}</td>
              <td>{item.serial_number || "_"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
