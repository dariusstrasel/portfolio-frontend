import React from "react";

const TopSocialMedia: React.FC = () => {
  return (
    <ul className="flex social-media">
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
  );
};

export default TopSocialMedia;
