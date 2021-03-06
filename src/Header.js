import React from "react";
import DropdownBtn from "./DropdownBtn"

const Header = ({ fetchUserInformation }) => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 8px",
        boxShadow: "0 2px 8px 2px rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        backgroundColor: "black",
        fontFamily: "'Roboto', sans-serif",
        fontWeight: "400",
        zIndex: "8",
        height: "70px",
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
     <DropdownBtn />
    </header>
  );
};

export default Header;
