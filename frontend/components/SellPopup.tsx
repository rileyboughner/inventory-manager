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
  onConfirm: () => void;
};

const SellPopup: React.FC<SellPopupProps> = ({ item, onClose, onConfirm }) => {
  const [amount, setAmount] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleClickOutside = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === "popup-overlay") {
      onClose();
    }
  };

  const handleConfirm = () => {
    const value = parseFloat(amount);
    if (isNaN(value)) {
      setError("Sale price is required and must be a number.");
      return;
    }

    fetch(`/api/inventory/sell/${item.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value_out: value }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to sell item");
        return res.json();
      })
      .then(() => {
        onConfirm();
      })
      .catch((err) => {
        console.error("Sell error:", err);
        setError("Something went wrong while selling the item.");
      });
  };

  const isInputInvalid = error.length > 0;

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
          boxSizing: "border-box",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", marginBottom: "16px" }}>
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

          <div style={{ flex: 1 }}>
            <h2 style={{ marginTop: 0 }}>Sell Item</h2>
            <p><strong>{item.brand} {item.model}</strong></p>
            <p>Color: {item.color}</p>
            <p>Style: {item.style}</p>
            <p>Original Price: ${!isNaN(Number(item.price)) ? Number(item.price).toFixed(2) : "0.00"}</p>
          </div>
        </div>

        <label htmlFor="amount" style={{ marginBottom: "4px" }}>
          Sale Price:
        </label>
        <div style={{ position: "relative", width: "100%" }}>
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              color: isInputInvalid ? "red" : "#666",
              fontSize: "14px",
            }}
          >
            $
          </span>
          <input
            id="amount"
            type="text"
            inputMode="decimal"
            pattern="[0-9]*[.,]?[0-9]*"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
              setError("");
            }}
            placeholder="Enter sale price"
            style={{
              padding: "10px 10px 10px 24px",
              fontSize: "14px",
              border: `1px solid ${isInputInvalid ? "red" : "#ccc"}`,
              borderRadius: "6px",
              marginBottom: "4px",
              width: "100%",
              boxSizing: "border-box",
            }}
          />
        </div>

        {error && (
          <span style={{ color: "red", fontSize: "14px", marginBottom: "8px" }}>{error}</span>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
            paddingTop: "16px", // 👈 added padding above buttons
          }}
        >
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
            onClick={handleConfirm}
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
