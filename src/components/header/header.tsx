import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bar flex">
      <div className="child">
        <img
          className="clip-circle"
          src="../images/me.jpg"
          id="myFace"
          /*align="left"*/ alt="Portrait of Web Developer Darius Strasel"
        />
        <div className="parent">
          <h1 className="myName">Darius Strasel</h1>
          <p>Software / Web Developer</p>
        </div>
      </div>
      <nav className="top child">
        <ul className="flex flex-end">
          <li className="active">
            <a href="#">
              <i className="entypo-user" /> About
            </a>
          </li>
          <li>
            <a href="#">
              <i className="entypo-pencil" /> Blog
            </a>
          </li>
          <li>
            <a href="#">
              <i className="entypo-code" /> Software
            </a>
          </li>
          <li>
            <a href="#">
              <i className="entypo-camera" /> Photos
            </a>
          </li>
        </ul>
      </nav>
      <ul className="flex social-media">
        <li>
          <a href="https://github.com/dariusstrasel" title="Github">
            <span className="entypo-github icon icon-github" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/dariusstrasel" title="LinkedIn">
            <span className="entypo-linkedin icon icon-linkedin" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/dariusstrasel" title="Twitter">
            <span className="entypo-twitter icon icon-twitter" />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
