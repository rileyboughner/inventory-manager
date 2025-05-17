import React from "react";
import logo from "../assets/logo.png";

const Sidebar: React.FC = () => {
  return (
    <div style={sidebarStyle}>
      <img src={logo} alt="Logo" style={logoImageStyle} />
      <nav>
        <ul style={navListStyle}>
          <li style={navItemStyle}><a href="#" style={linkStyle}>Dashboard</a></li>
          <li style={navItemStyle}><a href="#" style={linkStyle}>Inventory</a></li>
          <li style={navItemStyle}><a href="#" style={linkStyle}>Trades</a></li>
          <li style={navItemStyle}><a href="#" style={linkStyle}>History</a></li>
          <li style={navItemStyle}><a href="#" style={linkStyle}>Settings</a></li>
        </ul>
      </nav>
    </div>
  );
};

const sidebarStyle: React.CSSProperties = {
  width: "220px",
  height: "100vh",
  backgroundColor: "#1e1e2f",
  color: "#fff",
  padding: "20px",
  position: "fixed",
  left: 0,
  top: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const logoImageStyle: React.CSSProperties = {
  width: "80px",
  height: "80px",
  objectFit: "contain",
  marginBottom: "24px",
};

const navListStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  width: "100%",
};

const navItemStyle: React.CSSProperties = {
  marginBottom: "12px",
  textAlign: "center",
};

const linkStyle: React.CSSProperties = {
  color: "#ccc",
  textDecoration: "none",
  fontSize: "24px",
  transition: "color 0.2s",
};

export default Sidebar;
