import React from "react";
import portrait from "./me.jpg";
const Portrait: React.FC = () => {
  return (
    <div className="child">
      <img
        className="clip-circle"
        src={portrait}
        id="myFace"
        alt="Portrait of Web Developer Darius Strasel"
      ></img>
      <div className="parent">
        <h1 className="myName">Darius Strasel</h1>
        <p>Software / Web Developer</p>
      </div>
    </div>
  );
};

export default Portrait;
