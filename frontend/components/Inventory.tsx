import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import ItemInfoPopup from "../components/ItemInfoPopup";
import SellPopup from "../components/SellPopup";

type InventoryItem = {
  id: number;
  brand: string;
  model: string;
  color: string;
  style: string;
  price: number;
  image_url: string;
};

const Inventory: React.FC<{ refreshTrigger: number }> = ({ refreshTrigger }) => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);
  const [showSellPopup, setShowSellPopup] = useState(false);

  const fetchInventory = () => {
    setLoading(true);
    fetch("http://localhost:5000/api/inventory/")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setInventory(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch inventory:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchInventory();
  }, [refreshTrigger]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div style={gridStyle}>
        {inventory.map((item) => (
          <ItemCard
            key={item.id}
            imageUrl={item.image_url}
            brand={item.brand}
            model={item.model}
            color={item.color}
            style={item.style}
            price={item.price}
            onClick={() => setSelectedItem(item)}
            onSell={() => {
              setSelectedItem(item);
              setShowSellPopup(true);
            }}
          />
        ))}
      </div>

      {selectedItem && !showSellPopup && (
        <ItemInfoPopup item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}

      {selectedItem && showSellPopup && (
        <SellPopup
          item={selectedItem}
          onClose={() => {
            setShowSellPopup(false);
            setSelectedItem(null);
          }}
          onConfirm={(amount) => {
            console.log(`Sold ${selectedItem.brand} ${selectedItem.model} for $${amount}`);
            setShowSellPopup(false);
            setSelectedItem(null);
          }}
        />
      )}
    </>
  );
};

const gridStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  padding: "32px",
  boxSizing: "border-box",
  alignItems: "flex-start",
  justifyContent: "flex-start",
};

export default Inventory;
