import React from "react";
import "../index.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <h1>RecipeFinder</h1>
        <ul className="nav-links">
          <li>
            <a href="https://github.com/ParthMahadik04">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/parthmahadik08/">LinkedIn</a>
          </li>
          <li>
            <a href="https://leetcode.com/u/zohUC3M127/">Leetcode</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
