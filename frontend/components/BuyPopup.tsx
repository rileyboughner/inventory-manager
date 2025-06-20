import React, { useState } from "react";

const BuyPopup: React.FC<{
  onClose: () => void;
  onConfirm: () => void;
}> = ({ onClose, onConfirm }) => {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    color: "",
    style: "",
    serialNumber: "",
    imageUrl: "",
    price: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const newErrors: { [key: string]: boolean } = {};
    ["brand", "model", "price"].forEach((field) => {
      if (!formData[field as keyof typeof formData]) newErrors[field] = true;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

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
      const response = await fetch("http://localhost:5000/api/inventory/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to post data");

      onConfirm(); // ✅ Only call this AFTER the API has responded successfully
    } catch (error) {
      console.error("Error submitting buy request:", error);
    }
  };

  return (
    <div
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
        style={{
          backgroundColor: "#fff",
          padding: "24px",
          borderRadius: "12px",
          width: "400px",
          maxWidth: "90%",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.25)",
        }}
      >
        <h2 style={{ marginBottom: "16px" }}>Buy New Guitar</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {["brand", "model", "color", "style", "serialNumber"].map((field) => (
            <input
              key={field}
              type="text"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              name={field}
              value={(formData as any)[field]}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: errors[field] ? "2px solid red" : "1px solid #ccc",
                fontSize: "14px",
                boxSizing: "border-box",
              }}
            />
          ))}

          <div style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                color: "#888",
              }}
            >
              $
            </span>
            <input
              type="text"
              inputMode="decimal"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px 10px 10px 24px",
                borderRadius: "6px",
                border: errors["price"] ? "2px solid red" : "1px solid #ccc",
                fontSize: "14px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <input
            type="text"
            placeholder="Image URL"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
          />

          {formData.imageUrl && (
            <img
              src={formData.imageUrl}
              alt="Preview"
              style={{ maxHeight: "200px", marginTop: "12px", objectFit: "contain" }}
            />
          )}
        </div>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={onClose}
            style={{
              padding: "8px 16px",
              borderRadius: "6px",
              border: "none",
              background: "#eee",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            style={{
              padding: "8px 16px",
              borderRadius: "6px",
              border: "none",
              backgroundColor: "#4CAF50",
              color: "#fff",
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

export default BuyPopup;
