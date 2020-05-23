import React from "react";

const TopNavbar: React.FC = () => {
  return (
    <nav className="top child">
      <ul className="flex flex-end">
        <li className="active">
          <a href="#">
            <i className="entypo-user"></i> About
          </a>
        </li>
        <li>
          <a href="#">
            <i className="entypo-pencil"></i> Blog
          </a>
        </li>
        <li>
          <a href="#">
            <i className="entypo-code"></i> Software
          </a>
        </li>
        <li>
          <a href="#">
            <i className="entypo-camera"></i> Photos
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default TopNavbar;
