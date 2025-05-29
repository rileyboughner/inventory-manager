import React, { useState } from 'react';

type InventoryItem = {
  id: number;
  brand: string;
  model: string;
  color: string;
  style: string;
  price: number;
  image_url: string;
};

type ItemPopupProps = {
  item: InventoryItem;
  onClose: () => void;
};

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '10px',
  position: 'relative',
  maxWidth: '400px',
  width: '100%',
  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
};

const closeButtonStyle: React.CSSProperties = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  backgroundColor: 'rgba(0, 0, 0, 0.6)', // subtle black
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  width: '32px',
  height: '32px',
  fontSize: '18px',
  fontWeight: 'bold',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
  transition: 'transform 0.2s ease, background-color 0.3s ease',
};

const closeButtonHoverStyle: React.CSSProperties = {
  transform: 'scale(1.1)',
  backgroundColor: 'rgba(0, 0, 0, 0.8)', // darker on hover
};

const ItemPopup: React.FC<ItemPopupProps> = ({ item, onClose }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Prevent modal content click from closing the popup
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={handleModalClick}>
        <button
          onClick={onClose}
          style={{ ...closeButtonStyle, ...(isHovered ? closeButtonHoverStyle : {}) }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          ×
        </button>
        <img
          src={item.image_url}
          alt={`${item.brand} ${item.model}`}
          style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }}
        />
        <h2>{item.brand} {item.model}</h2>
        <p><strong>Color:</strong> {item.color}</p>
        <p><strong>Style:</strong> {item.style}</p>
        <p><strong>Price:</strong> {item.price}</p>
      </div>
    </div>
  );
};

export default ItemPopup;
