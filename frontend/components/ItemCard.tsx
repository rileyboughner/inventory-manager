import React, { useState } from "react";

type ItemCardProps = {
  imageUrl: string;
  brand: string;
  model: string;
  color: string;
  style: string;
  price: number;
  onClick?: () => void;
  onSell?: () => void;
  showSoldDate?: boolean;
  dateSold?: string;
};
const ItemCard: React.FC<ItemCardProps> = ({
  imageUrl,
  brand,
  model,
  color,
  style,
  price,
  onClick,
  onSell,
  showSoldDate,
  dateSold,
}) => {
  const [hovered, setHovered] = useState<"sell" | "trade" | null>(null);

  const green = "#2e7d32";

  const cardStyle: React.CSSProperties = {
    width: "300px",
    padding: "16px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    textAlign: "center",
    margin: "10px",
    fontFamily: "Arial, sans-serif",
  };

  const imageStyle: React.CSSProperties = {
    width: "250px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "14px",
    color: "#333",
    margin: "4px 0",
  };

  const boldNameStyle: React.CSSProperties = {
    fontSize: "15px",
    fontWeight: "bold",
    marginBottom: "8px",
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    marginTop: "16px",
  };

  const baseButtonStyle: React.CSSProperties = {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "2px solid",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
    backgroundColor: "transparent",
    transition: "all 0.2s ease-in-out",
  };

  const buttonStyle = (type: "sell" | "trade") => ({
    ...baseButtonStyle,
    borderColor: green,
    color: hovered === type ? "#fff" : green,
    backgroundColor: hovered === type ? green : "transparent",
  });

  return (
    <div style={cardStyle} onClick={onClick}>
      <img src={imageUrl} alt={``} style={imageStyle} />
      <div style={boldNameStyle}>{brand} {model}</div>
      {showSoldDate ? (
        <div style={labelStyle}>Sold on: {dateSold}</div>
      ) : (
        <div>
          <div style={labelStyle}>Color: {color}</div>
          <div style={labelStyle}>Style: {style}</div>
          <div style={labelStyle}>Price: {price}</div>
          <div style={buttonContainerStyle}>
            <button
              style={buttonStyle("sell")}
              onMouseEnter={() => setHovered("sell")}
              onMouseLeave={() => setHovered(null)}
              onClick={(e) => {
                e.stopPropagation();
                onSell(); 
              }}
            >
              Sell
            </button>
            <button
              style={buttonStyle("trade")}
              onMouseEnter={() => setHovered("trade")}
              onMouseLeave={() => setHovered(null)}
              onClick={(e) => {
                e.stopPropagation();
                console.log("Trade clicked");
              }}
            >
              Trade
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemCard;
