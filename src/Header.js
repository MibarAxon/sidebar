import React from "react";
import SwitchAplication from "./SwitchAplication/Switch-Alication";

const Header = ({ fetchUserInformation }) => {
  return (
    <header
      style={{
        padding: "0 8px",
        boxShadow: "0 2px 8px 2px rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        backgroundColor: "black",
        fontFamily: "'Roboto', sans-serif",
        fontWeight: "400",
        zIndex: "8",
        height: "50px",
        width: "100%",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "32px",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        Axon
      </h1>
      <div style={{ position: "relative" }}>{/* <SwitchAplication /> */}</div>
    </header>
  );
};

export default Header;
