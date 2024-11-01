// Navbar.js
import React from 'react';
import './Navbar.css'; // Import the CSS for the navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Jahmaro's Artificial Image Generator</div>
      {/* Uncomment this block when ready to add links
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#Other Projects">Projects</a></li>
      </ul>
      */}
    </nav>
  );
}

export default Navbar;
