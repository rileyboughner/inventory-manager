import React, { useState } from 'react';

type InventoryItem = {
  id: number;
  brand: string;
  model: string;
  color: string;
  style: string;
  price: number;
  image_url: string;
  serial_number: string;
};

type ItemInfoPopupProps = {
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
  padding: '24px',
  borderRadius: '12px',
  width: '100%',
  maxWidth: '460px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  position: 'relative',
};

const closeButtonStyle: React.CSSProperties = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
};

const labelStyle: React.CSSProperties = {
  fontWeight: 600,
  fontSize: '13px',
  color: '#333',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
};

const infoTextStyle: React.CSSProperties = {
  fontSize: '15px',
  marginBottom: '16px',
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '16px 12px',
};

const ItemInfoPopup: React.FC<ItemInfoPopupProps> = ({ item, onClose }) => {
  const [isHovered, setIsHovered] = useState(false);

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
          src={item.image_url || ''}
          style={{ width: '100%', borderRadius: '8px', marginBottom: '16px' }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />

        <div style={gridStyle}>
          <div>
            <div style={labelStyle}>Brand</div>
            <div style={infoTextStyle}>{item.brand}</div>
          </div>
          <div>
            <div style={labelStyle}>Model</div>
            <div style={infoTextStyle}>{item.model}</div>
          </div>
          <div>
            <div style={labelStyle}>Color</div>
            <div style={infoTextStyle}>{item.color}</div>
          </div>

          <div>
            <div style={labelStyle}>Serial #</div>
            <div style={infoTextStyle}>{item.serial_number}</div>
          </div>
          <div>
            <div style={labelStyle}>Style</div>
            <div style={infoTextStyle}>{item.style}</div>
          </div>
          <div>
            <div style={labelStyle}>Price</div>
            <div style={infoTextStyle}>${parseFloat(String(item.price)).toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemInfoPopup;
