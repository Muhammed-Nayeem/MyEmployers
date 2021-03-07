//All The Imported Materials:
import React from "react";
import "./Header.css";


//Header Component:
const Header = () => {
  return (
    <header className="header-area">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <h3>my employers</h3>
          </div>
          <nav className="nav-items">
            <ul>
              <li>
                <a href="/dashboard">dashboard</a>
              </li>
              <li>
                <a href="/users">users</a>
              </li>
              <li>
                <a href="/users-review">employer review</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
