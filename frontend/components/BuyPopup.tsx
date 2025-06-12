import React, { useState } from "react";

const BuyPopup: React.FC<{ onClose: () => void; onConfirm: () => void }> = ({ onClose, onConfirm }) => {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    color: "",
    style: "",
    serialNumber: "",
    imageUrl: "",
    price: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const data = {
      brand: formData.brand,
      model: formData.model,
      color: formData.color,
      style: formData.style,
      serial_number: formData.serialNumber,
      image_url: formData.imageUrl,
      price: parseFloat(formData.price),
    };

    try {
      const response = await fetch("http://localhost:5000/api/buy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to post data");
      onConfirm();
    } catch (error) {
      console.error("Error submitting buy request:", error);
    }
  };

  return (
    <div style={backdropStyle}>
      <div style={popupStyle}>
        <h2 style={{ marginBottom: "16px" }}>Buy New Guitar</h2>

        <div style={formStyle}>
          {["brand", "model", "color", "style", "serialNumber"].map((field) => (
            <input
              key={field}
              type="text"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              name={field}
              value={(formData as any)[field]}
              onChange={handleChange}
              style={inputStyle}
            />
          ))}

          {/* Price field with dollar sign */}
          <div style={{ position: "relative" }}>
            <span style={dollarStyle}>$</span>
            <input
              type="text"
              inputMode="decimal"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              style={{ ...inputStyle, paddingLeft: "24px" }}
            />
          </div>

          {/* Image URL field */}
          <input
            type="text"
            placeholder="Image URL"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            style={inputStyle}
          />

          {formData.imageUrl && (
            <img
              src={formData.imageUrl}
              alt="Preview"
              style={{ maxHeight: "200px", marginTop: "12px", objectFit: "contain" }}
            />
          )}
        </div>

        <div style={buttonRow}>
          <button onClick={onClose} style={buttonStyle}>Cancel</button>
          <button onClick={handleSubmit} style={{ ...buttonStyle, backgroundColor: "#4CAF50", color: "#fff" }}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

const backdropStyle: React.CSSProperties = {
  position: "fixed",
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const popupStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  padding: "24px",
  borderRadius: "12px",
  width: "400px",
  maxWidth: "90%",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.25)",
};

const formStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "14px",
  boxSizing: "border-box",
};

const dollarStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "10px",
  transform: "translateY(-50%)",
  color: "#888",
};

const buttonRow: React.CSSProperties = {
  marginTop: "20px",
  display: "flex",
  justifyContent: "space-between",
};

const buttonStyle: React.CSSProperties = {
  padding: "8px 16px",
  borderRadius: "6px",
  border: "none",
  background: "#eee",
  cursor: "pointer",
};

export default BuyPopup;

