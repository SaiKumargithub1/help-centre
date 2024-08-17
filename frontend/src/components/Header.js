import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Abstract | Help Center</div>
      <button className="submit-request">Submit a request</button>
    </header>
  );
}

export default Header;
