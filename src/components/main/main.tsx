import React from "react";
import "../app/App.scss";
import TopNavbar from "../topNavbar/topNavbar";
import OffNavbar from "../offNavBar/OffNavBar";
import Footer from "../Footer/Footer";
import Portrait from "../Portrait/Portrait";
import TopSocialMedia from "../TopSocialMedia/TopSocialMedia";
import AboutMe from "../AboutMe/AboutMe";

const Main: React.FC = () => {
  return (
    <div>
      <OffNavbar></OffNavbar>
      <input type="checkbox" id="nav-trigger" className="nav-trigger" />
      <div className="wrapper">
        <header className="bar flex">
          <Portrait></Portrait>
          <TopNavbar></TopNavbar>
          <TopSocialMedia></TopSocialMedia>
          <label htmlFor="nav-trigger"></label>
        </header>
        <AboutMe />
        <Footer />
      </div>
      <script
        src="https://code.jquery.com/jquery-3.2.1.min.js"
        integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
        integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};

export default Main;
