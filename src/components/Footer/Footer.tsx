import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex space-around footer navbar-fixed-bottom">
      <small className="child">
        Copyright <a href="mailto:strasel.darius@gmail.com">Darius Strasel</a>{" "}
        2017
      </small>
      <ul className="flex social-media bottom">
        <li>
          <a href="https://github.com/dariusstrasel" title="Github">
            <span className="entypo-github icon icon-github"></span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/dariusstrasel" title="LinkedIn">
            <span className="entypo-linkedin icon icon-linkedin"></span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/dariusstrasel" title="Twitter">
            <span className="entypo-twitter icon icon-twitter"></span>
          </a>
        </li>
      </ul>
      <a href="#" title="Resume" className="social-media bottom">
        <span className="entypo-doc-text icon icon-resume"></span>
      </a>
    </footer>
  );
};

export default Footer;
