import React from "react";
import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import ItemCard from "../components/ItemCard"; // using the shared ItemCard
import ItemInfoPopup from "../components/ItemInfoPopup"

const placeholderHistory = [
  {
    id: 2,
    brand: "Gibson",
    model: "Les Paul",
    color: "black",
    style: "HH",
    price: "$100",
    date_sold: "2024-01-22",
    image_url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.FBALdAsuqUBfWnE6f2CWGgHaHa%26cb%3Diwp2%26pid%3DApi&f=1&ipt=fb1afa6786fe652e793d569b6cfd420a90fc367671154d6e77906c4f1b925aba&ipo=images",
  },
  {
    id: 1,
    brand: "Fender",
    model: "Stratocaster",
    color: "black",
    style: "SSS",
    price: "$100",
    date_sold: "2024-03-15",
    image_url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.GcvZxoyKf117eIkBDhY2bwHaHa%26cb%3Diwp2%26pid%3DApi&f=1&ipt=4589365812afceeea330797098ae1b407a788537f11e5547e6d75d9888c68a18&ipo=images",
  },
  {
    id: 2,
    brand: "Gibson",
    model: "Les Paul",
    color: "black",
    style: "HH",
    price: "$100",
    date_sold: "2024-01-22",
    image_url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.FBALdAsuqUBfWnE6f2CWGgHaHa%26cb%3Diwp2%26pid%3DApi&f=1&ipt=fb1afa6786fe652e793d569b6cfd420a90fc367671154d6e77906c4f1b925aba&ipo=images",
  },
  {
    id: 1,
    brand: "Fender",
    model: "Stratocaster",
    color: "black",
    style: "SSS",
    price: "$100",
    date_sold: "2024-03-15",
    image_url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.GcvZxoyKf117eIkBDhY2bwHaHa%26cb%3Diwp2%26pid%3DApi&f=1&ipt=4589365812afceeea330797098ae1b407a788537f11e5547e6d75d9888c68a18&ipo=images",
  },
  {
    id: 2,
    brand: "Gibson",
    model: "Les Paul",
    color: "black",
    style: "HH",
    price: "$100",
    date_sold: "2024-01-22",
    image_url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.FBALdAsuqUBfWnE6f2CWGgHaHa%26cb%3Diwp2%26pid%3DApi&f=1&ipt=fb1afa6786fe652e793d569b6cfd420a90fc367671154d6e77906c4f1b925aba&ipo=images",
  },
];

const History: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  return (
    <div style={pageStyle}>
      <Sidebar />
      <div style={gridStyle}>
      {placeholderHistory.map((item) => (
        <ItemCard
          key={item.id}
          imageUrl={item.image_url}
          brand={item.brand}
          model={item.model}
          color={item.color}
          style={item.style}
          price={item.price}
          showSoldDate={true}
          dateSold={item.date_sold}
          onClick={() => {
            setSelectedItem(item); 
          }}
        />
      ))}

      </div>
      {selectedItem && (
        <ItemInfoPopup item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
};

const pageStyle: React.CSSProperties = {
  marginLeft: "250px", // shift content right to make space for the sidebar
  padding: "32px",
  minHeight: "100vh",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
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

const titleStyle: React.CSSProperties = {
  fontSize: "32px",
  fontWeight: "bold",
  marginBottom: "24px",
  color: "#333",
};

export default History;
