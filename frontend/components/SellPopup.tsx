import React, { useState } from "react";

type InventoryItem = {
  id: number;
  brand: string;
  model: string;
  color: string;
  style: string;
  price: number;
  image_url: string;
};

type SellPopupProps = {
  item: InventoryItem;
  onClose: () => void;
  onConfirm: (amount: number) => void;
};

const SellPopup: React.FC<SellPopupProps> = ({ item, onClose, onConfirm }) => {
  const [amount, setAmount] = useState<string>("");

  const handleClickOutside = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === "popup-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="popup-overlay"
      onClick={handleClickOutside}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "24px",
          width: "600px",
          maxWidth: "90%",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Top section: image and info side-by-side */}
        <div style={{ display: "flex", marginBottom: "16px" }}>
          {/* Left: Image */}
          <div style={{ flex: "0 0 180px", marginRight: "24px" }}>
            <img
              src={item.image_url}
              alt={`${item.brand} ${item.model}`}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Right: Info */}
          <div style={{ flex: 1 }}>
            <h2 style={{ marginTop: 0 }}>Sell Item</h2>
            <p><strong>{item.brand} {item.model}</strong></p>
            <p>Color: {item.color}</p>
            <p>Style: {item.style}</p>
            <p>Original Price: {item.price}</p>
          </div>
        </div>

        <label htmlFor="amount" style={{ marginBottom: "4px" }}>
          Sale Price:
        </label>
        <input
          id="amount"
          type="text" // disables arrows
          inputMode="decimal" // brings up numeric keyboard on mobile
          pattern="[0-9]*[.,]?[0-9]*" // optional: pattern to allow decimal numbers
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter sale price"
          style={{
            padding: "10px",
            fontSize: "14px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            marginBottom: "20px",
            width: "100%",
          }}
        />

        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
          <button
            onClick={onClose}
            style={{
              padding: "8px 16px",
              backgroundColor: "#ccc",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              const value = parseFloat(amount);
              if (!isNaN(value)) {
                onConfirm(value);
              }
            }}
            style={{
              padding: "8px 16px",
              backgroundColor: "#2e7d32",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellPopup;
