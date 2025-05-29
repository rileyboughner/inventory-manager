import React from "react";
import { MdDashboardCustomize, MdHistory } from "react-icons/md";
import { LiaGuitarSolid } from "react-icons/lia";
import { GiSplitArrows } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";

const Sidebar: React.FC = () => {
  const user = {
    name: "Music Man",
    email: "quotes@musicman.com",
    profileImage: "/profile.jpg",
  };

  return (
    <div style={sidebarStyle}>
      <div>
        <img src="/logo.png" alt="Logo" style={logoImageStyle} />
        <nav style={navContainerStyle}>
          <ul style={navListStyle}>
            <li style={navItemStyle}>
              <a href="/trades" style={linkStyle}>
                <GiSplitArrows style={iconStyle} />
                Buy & Sell
              </a>
            </li>
            <li style={navItemStyle}>
              <a href="/inventory" style={linkStyle}>
                <LiaGuitarSolid style={iconStyle} />
                Inventory
              </a>
            </li>
            <li style={navItemStyle}>
              <a href="/history" style={linkStyle}>
                <MdHistory style={iconStyle} />
                History
              </a>
            </li>
            <li style={navItemStyle}>
              <a href="/settings" style={linkStyle}>
                <CiSettings style={iconStyle} />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* User Info */}
      <div style={userInfoContainerStyle}>
        <div style={userDetailsStyle}>
          <img src={user.profileImage} alt="User" style={profileImageStyle} />
          <div>
            <div style={userNameStyle}>{user.name}</div>
            <div style={userEmailStyle}>{user.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// === Styles ===

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
  justifyContent: "space-between",
};

const logoImageStyle: React.CSSProperties = {
  width: "80px",
  height: "80px",
  marginTop: "4vh",
  objectFit: "contain",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "24px",
};

const navContainerStyle: React.CSSProperties = {
  width: "100%",
  display: "flex",
  marginTop: "8vh",
  flexDirection: "column",
  alignItems: "flex-start",
};

const navListStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  width: "100%",
};

const navItemStyle: React.CSSProperties = {
  marginBottom: "12px",
};

const iconStyle: React.CSSProperties = {
  color: "#CCC",
  fontSize: "24px",
  marginRight: "10px",
};

const linkStyle: React.CSSProperties = {
  color: "#CCC",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  fontSize: "28px",
  padding: "8px 12px",
  transition: "color 0.2s",
};

// === User Info ===

const userInfoContainerStyle: React.CSSProperties = {
  borderTop: "1px solid #444",
  padding: "12px 8px 32px 8px", // <-- 32px bottom padding
};

const userDetailsStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
};

const userNameStyle: React.CSSProperties = {
  fontWeight: "bold",
  fontSize: "14px",
  color: "#fff",
};

const userEmailStyle: React.CSSProperties = {
  fontSize: "12px",
  color: "#aaa",
};

const profileImageStyle: React.CSSProperties = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  objectFit: "cover",
  marginRight: "12px",
};

export default Sidebar;
