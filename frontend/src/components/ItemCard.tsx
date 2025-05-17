import React from "react";

type ItemCardProps = {
  imageUrl: string;
  brand: string;
  model: string;
  color: string;
  style: string;
  price: number;
};

const ItemCard: React.FC<ItemCardProps> = ({
  imageUrl,
  brand,
  model,
  color,
  style,
  price,
}) => {
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
    transformOrigin: "center", // important for natural rotation
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

  return (
    <div style={cardStyle}>
      <img src={imageUrl} alt={`${brand} ${model}`} style={imageStyle} />
      <div style={boldNameStyle}>{brand} {model}</div>
      <div style={labelStyle}>Color: {color}</div>
      <div style={labelStyle}>Style: {style}</div>
      <div style={labelStyle}>Price: ${price.toFixed(2)}</div>
    </div>
  );
};

export default ItemCard;

