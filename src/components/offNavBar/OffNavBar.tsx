import React from "react";

const OffNavbar: React.FC = () => {
  return (
    <nav className="nav-off-canvas">
      <ul>
        <li className="nav-item">
          <a href="#">
            <i className="entypo-user"></i> About
          </a>
        </li>
        <li className="nav-item">
          <a href="#">
            <i className="entypo-pencil"></i> Blog
          </a>
        </li>
        <li className="nav-item">
          <a href="#">
            <i className="entypo-code"></i> Software
          </a>
        </li>
        <li className="nav-item">
          <a href="#">
            <i className="entypo-camera"></i> Photography
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default OffNavbar;
